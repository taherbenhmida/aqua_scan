# Generated by Django 4.1.5 on 2024-07-17 23:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('personnel', '0002_tank_newfield'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tank',
            old_name='average_weight',
            new_name='average_weight_tank',
        ),
        migrations.RenameField(
            model_name='tank',
            old_name='biomass',
            new_name='biomass_tank',
        ),
    ]
