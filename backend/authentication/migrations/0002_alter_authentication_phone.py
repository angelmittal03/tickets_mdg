# Generated by Django 3.2.20 on 2023-07-13 21:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='authentication',
            name='phone',
            field=models.IntegerField(),
        ),
    ]
