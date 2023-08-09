# Generated by Django 4.2.3 on 2023-08-03 14:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0006_remove_productcolor_product_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='productcolor',
            name='product',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='color', to='products.product'),
        ),
        migrations.AddField(
            model_name='productquality',
            name='product',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='quality', to='products.product'),
        ),
        migrations.AddField(
            model_name='productsize',
            name='product',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='size', to='products.product'),
        ),
    ]