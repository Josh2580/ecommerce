# Generated by Django 4.2.3 on 2023-09-12 15:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0022_alter_product_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(default='products/images/product_default.png', upload_to='products/images/'),
        ),
    ]
