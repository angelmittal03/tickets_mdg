from django.db import models

# Schema
# name: String
# Email : string
# phone : int
# Pwd: string - 8 characters,etc


class Authentication(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    phone = models.IntegerField()
    password = models.CharField(max_length=50)