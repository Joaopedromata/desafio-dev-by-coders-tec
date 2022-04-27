from django.db import models

from setup.models import AbstractBaseModel
from django.core.validators import MinLengthValidator


class Finances(AbstractBaseModel):
    type = models.IntegerField(null=False, blank=False)
    date = models.DateField(null=False, blank=False)
    value = models.FloatField(null=False, blank=False)
    document_number = models.CharField(max_length=11, validators=[MinLengthValidator(11)], null=False, blank=False)
    card_number = models.CharField(max_length=12, validators=[MinLengthValidator(12)], null=False, blank=False)
    time = models.TimeField(null=False, blank=False)
    owner_name = models.CharField(max_length=256, null=False, blank=False)
    store_name = models.CharField(max_length=256, null=False, blank=False)

    def __str__(self):
        return self.store_name
