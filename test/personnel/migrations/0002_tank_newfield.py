# Generated by Django 4.1.5 on 2024-07-17 23:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('personnel', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='tank',
            name='newfield',
            field=models.CharField(default=0, max_length=100),
            preserve_default=False,
        ),
    ]
