# Generated by Django 3.2.20 on 2023-07-13 23:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('payments', '0002_auto_20230714_0511'),
    ]

    operations = [
        migrations.AlterField(
            model_name='payment',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
        migrations.AlterField(
            model_name='payment',
            name='phone',
            field=models.IntegerField(),
        ),
    ]
