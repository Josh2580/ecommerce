# Generated by Django 4.2.3 on 2023-08-03 12:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_alter_product_color_alter_product_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='color',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.productcolor'),
        ),
    ]