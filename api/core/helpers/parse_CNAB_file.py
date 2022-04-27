from core.helpers.format_CNAB_values import FormatCNABValues

class ParseCNABFile(FormatCNABValues):
  def __init__(self, file) -> None:
    self.file = file

  def read_file(self):
    return self.file.read().decode()

  def parse_to_list(self):
    text_file = self.read_file()

    return text_file.split('\n')

  def validate_row(self, row):
    if row == '':
      return False
    return True

  def values(self):
    parsed_to_list = self.parse_to_list()

    CNAB_values = []

    for row in parsed_to_list:
      if self.validate_row(row):
        obj = {}
        obj['type'] = self.format_type(row[0:1])
        obj['date'] = self.format_date(row[1:9])
        obj['value'] = self.format_value(row[9:19])
        obj['document_number'] = row[19:30]
        obj['card_number'] = row[30:42]
        obj['time'] = self.format_time(row[42:48])
        obj['owner_name'] = self.format_name(row[48:62])
        obj['store_name'] = self.format_name(row[62:81])
        CNAB_values.append(obj)


    return CNAB_values
