from django.db import models

# Schema
# name: String
# Email : string -> can be null/  can't be left
# phone : int
# Pwd: string - 8 characters,etc


class Authentication(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254, blank=True,null=True, unique=True)
    phone = models.IntegerField(unique=True)
    password = models.CharField(max_length=50)