# Generated by Django 4.2.3 on 2023-12-19 11:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('my_users', '0009_address_user'),
        ('order', '0016_alter_order_shipping_address'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='shipping_address',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='order_info', to='my_users.address'),
        ),
    ]
