# Generated by Django 3.2.20 on 2023-07-15 10:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='availibility',
            field=models.CharField(max_length=50),
        ),
    ]
