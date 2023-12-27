# Generated by Django 4.2.3 on 2023-12-23 11:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0019_orderaddress_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='shipping_address',
        ),
        migrations.AddField(
            model_name='order',
            name='payment_method',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
