# Generated by Django 4.2.3 on 2023-09-05 12:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0007_remove_orderitems_order_remove_orderitems_product_and_more'),
        ('products', '0017_product_vendor_delete_vendor'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_time', models.DateTimeField(auto_now_add=True)),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.customers')),
            ],
        ),
        migrations.CreateModel(
            name='OrderItems',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='order.order')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.product')),
            ],
        ),
    ]