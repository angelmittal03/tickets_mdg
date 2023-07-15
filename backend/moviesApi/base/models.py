from django.db import models

class Item (models.Model):
    uid = models.CharField(max_length=200)
    name=models.CharField(max_length=200)
    poster=models.CharField(max_length=1000)
    star=models.CharField(max_length=10)
    details=models.CharField(max_length=1000)

