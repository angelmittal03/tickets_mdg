# Generated by Django 3.2.20 on 2023-07-13 23:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0003_alter_authentication_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='authentication',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='authentication',
            name='phone',
            field=models.IntegerField(unique=True),
        ),
    ]
