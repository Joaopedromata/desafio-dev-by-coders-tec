from rest_framework import views
from rest_framework.response import Response

from core.helpers.calculate_total_amount import CalculateTotalAmount
from .helpers.parse_CNAB_file import ParseCNABFile
from . import models, serializers
from rest_framework.permissions import IsAuthenticated

class FinancesView(views.APIView):
  permission_classes = [IsAuthenticated]
  def post(self, request):
    file = request.data['file']

    if file is None:
      return Response(status=422)

    if not file.name.endswith('.txt'):
      return Response({
        'error': 'File must be .txt extension'
      })

    CNAB_file_values = ParseCNABFile(file).values()

    bulk_create_list = []

    for row in CNAB_file_values:
      bulk_create_list.append(
        models.Finances(
          type = row['type'],
          date = row['date'],
          value = row['value'],
          document_number = row['document_number'],
          card_number = row['card_number'],
          time = row['time'],
          owner_name = row['owner_name'],
          store_name = row['store_name']
        )
      )

    calculate_total_amount = CalculateTotalAmount(CNAB_file_values)

    format_response = {
      'data': CNAB_file_values,
      'total_amount': calculate_total_amount.get_total_amount()
    }

    models.Finances.objects.bulk_create(bulk_create_list)
    return Response(format_response,status=201)

  def get(self, request):
    queryset = models.Finances.objects.all()
    data = serializers.FinancesSerializer(queryset, many=True).data
    calculate_total_amount = CalculateTotalAmount(data)

    format_response = {
      'data': data,
      'total_amount': calculate_total_amount.get_total_amount()
    }
    return Response(format_response, status=200)
