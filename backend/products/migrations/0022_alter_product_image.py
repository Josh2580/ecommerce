# Generated by Django 4.2.3 on 2023-09-12 15:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0021_alter_productrating_customer_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, default='products/images/product_default.png', null=True, upload_to='products/images/'),
        ),
    ]
