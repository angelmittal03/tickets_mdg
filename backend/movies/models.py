from django.db import models
from django.core.validators import int_list_validator
# Schema
# Name:string
# date: string -> DD/MM/YYYY format
# time : string -> "12:30 am" format
# Price of ticket: decimal
# Desc: string
# Rating: decimal  ----
# Place: string
# Availability: array of int - stores array of seats already filled 
# Tags: string array - index  -----
# Seat_schema_row: int
# Seat_schema_col: int


class Item (models.Model):
    name= models.CharField( max_length=100)
    date= models.CharField(max_length=10)
    time= models.CharField(max_length=8)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    desc = models.TextField()
    location = models.TextField() 
    availibility = models.CharField(max_length=50) 
    rows = models.IntegerField()  
    cols = models.IntegerField()  

