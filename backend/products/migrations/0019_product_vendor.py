# Generated by Django 4.2.3 on 2023-09-07 11:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('categorys', '0002_vendor'),
        ('products', '0018_remove_product_vendor'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='vendor',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='categorys.vendor'),
        ),
    ]
