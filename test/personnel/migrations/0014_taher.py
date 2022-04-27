# Generated by Django 3.2.7 on 2022-04-27 13:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('personnel', '0013_delete_taher'),
    ]

    operations = [
        migrations.CreateModel(
            name='taher',
            fields=[
                ('matricule', models.IntegerField(max_length=20, primary_key=True, serialize=False)),
                ('matr_corps', models.CharField(blank=True, max_length=20, null=True)),
            ],
            options={
                'db_table': 'taher',
                'managed': False,
            },
        ),
    ]
