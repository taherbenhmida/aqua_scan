# Generated by Django 4.1.5 on 2024-07-25 14:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('personnel', '0006_fishtransfer'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tank',
            name='consommation',
            field=models.FloatField(default=0),
        ),
    ]
