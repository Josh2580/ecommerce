# Generated by Django 4.2.3 on 2023-09-05 12:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_order_orderitems'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='orderitems',
            name='order',
        ),
        migrations.RemoveField(
            model_name='orderitems',
            name='product',
        ),
        migrations.DeleteModel(
            name='Order',
        ),
        migrations.DeleteModel(
            name='OrderItems',
        ),
    ]
