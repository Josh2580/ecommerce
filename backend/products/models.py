from django.db import models
from django.contrib.auth import get_user_model
from categorys.models import ProductCategory


# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=200)
    image = models.ImageField()
    category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE)
    description = models.TextField(null=True, blank=True)
    # rating = models.DecimalField(
    #     max_digits=7, decimal_places=2, null=True, blank=True)
    # numReviews = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    countInStock = models.IntegerField(null=True, blank=True, default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} - {self.category}"
