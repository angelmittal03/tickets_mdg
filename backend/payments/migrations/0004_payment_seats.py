# Generated by Django 3.2.20 on 2023-07-15 10:37

import django.core.validators
from django.db import migrations, models
import re


class Migration(migrations.Migration):

    dependencies = [
        ('payments', '0003_auto_20230714_0519'),
    ]

    operations = [
        migrations.AddField(
            model_name='payment',
            name='seats',
            field=models.CharField(default='', max_length=50, validators=[django.core.validators.RegexValidator(re.compile('^\\d+(?:,\\ \\d+)*\\Z'), code='invalid', message=None)]),
            preserve_default=False,
        ),
    ]
