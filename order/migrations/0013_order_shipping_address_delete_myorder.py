# Generated by Django 4.2.3 on 2023-12-09 13:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('my_users', '0006_address_directions_address_first_name_and_more'),
        ('order', '0012_delete_myorderitems'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='shipping_address',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='my_users.address'),
        ),
        migrations.DeleteModel(
            name='MyOrder',
        ),
    ]
