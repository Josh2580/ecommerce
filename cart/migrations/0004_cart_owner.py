# Generated by Django 4.2.3 on 2023-11-13 13:55

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('cart', '0003_alter_cartitems_quantity'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='owner',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cart', to=settings.AUTH_USER_MODEL),
        ),
    ]
