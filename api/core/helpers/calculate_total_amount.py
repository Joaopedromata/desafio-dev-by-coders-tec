class CalculateTotalAmount:
  def __init__(self, data) -> None:
    self.data = data

  def describe_transactions(self, type):
    if type == 1:
      return True
    if type == 2:
      return False
    if type == 3:
      return False
    if type == 4:
      return True
    if type == 5:
      return True
    if type == 6:
      return True
    if type == 7:
      return True
    if type == 8:
      return True
    if type == 9:
      return False

  def get_total_amount(self):
    sum = 0
    for row in self.data:
      transaction = self.describe_transactions(row['type'])
      if transaction:
         sum = sum + row['value']
      else:
        sum = sum - row['value']
    return sum
