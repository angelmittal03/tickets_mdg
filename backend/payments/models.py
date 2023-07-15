from django.db import models
from django.core.validators import int_list_validator


# Schema
# name: string
# phone : int
# email : string -> can be null/ can be left
# amount: decimal
# Transaction_id: int - should be left
# Tranascton_url: string - should be left

class Payment(models.Model):
    name = models.CharField(max_length=50)
    phone= models.IntegerField()
    email = models.EmailField(max_length=254, blank=True,null=True )
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    transaction_id = models.TextField(blank=True,null=True, unique=True)
    transaction_url= models.TextField(blank=True,null=True, unique=True)
    seats= models.CharField(max_length=50) 
