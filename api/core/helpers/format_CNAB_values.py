import datetime

class FormatCNABValues:
  def format_date(self, value):
    year = int(value[0:4])
    month = int(value[4:6])
    day = int(value[6:8])

    return datetime.datetime(year, month, day).strftime('%Y-%m-%d')

  def format_value(self, value):
    return int(value) / 100

  def format_time(self, value):
    hour = int(value[0:2])
    minutes = int(value[2:4])
    seconds = int(value[4:6])

    return datetime.time(hour=hour, minute=minutes, second=seconds)

  def format_name(self, value):
    return value.strip()

  def format_type(self, value):
    return int(value)
