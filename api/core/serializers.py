from rest_framework import serializers
from . import models


class FinancesSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Finances
        fields = '__all__'
