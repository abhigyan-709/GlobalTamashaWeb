# Generated by Django 3.2.16 on 2023-09-24 06:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('feeds', '0019_alter_contactus_mobile'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contactus',
            name='mobile',
        ),
    ]
