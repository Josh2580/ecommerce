from django.db import models
from django.contrib.auth import get_user_model
# from django.contrib.auth.models import User


User = get_user_model()

# Create your models here.


class ParentProductCategory(models.Model):
    name = models.CharField(max_length=155, unique=True)
    image = models.ImageField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class ProductCategory(models.Model):
    parent = models.ForeignKey(
        "ParentProductCategory", on_delete=models.CASCADE,  related_name="main_category")
    name = models.CharField(max_length=155, unique=True)
    image = models.ImageField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}"


class Vendor(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    address = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.name}"
