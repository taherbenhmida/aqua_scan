# Generated by Django 4.1.5 on 2024-07-17 23:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('personnel', '0003_rename_average_weight_tank_average_weight_tank_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tank',
            old_name='average_weight_tank',
            new_name='average_weight',
        ),
        migrations.RenameField(
            model_name='tank',
            old_name='biomass_tank',
            new_name='biomass',
        ),
    ]
