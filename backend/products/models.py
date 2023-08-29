from django.db import models
# from django.contrib.auth import get_user_model
from categorys.models import ProductCategory


# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=200)
    category = models.ForeignKey(
        ProductCategory, on_delete=models.CASCADE, related_name="products")
    image = models.ImageField(null=True, blank=True,
                              upload_to=f"products/images/")
    description = models.TextField(null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return f"{self.name}"

    def category_name(self):
        catName = ProductCategory.objects.get(name=self.category)
        return str(catName.name)

    def color_name(self):
        # colName = self.id
        a = ProductColor.objects.filter(products=self.pk)
        # b = colName.productColor_set.all()
        # b = ""
        # for i in a:
        #     b = str(i) + b
        return a


class ProductSize(models.Model):
    size = models.CharField(max_length=155, null=True, blank=True)
    products = models.ManyToManyField(
        Product, related_name="size", blank=True)

    def __str__(self):
        return self.size


class ProductColor(models.Model):
    color = models.CharField(max_length=155, null=True, blank=True)
    products = models.ManyToManyField(
        Product,  related_name="color", blank=True)

    def __str__(self):
        return self.color


class ProductQuality(models.Model):
    quality = models.CharField(max_length=155, null=True, blank=True)
    products = models.ManyToManyField(
        Product, related_name="quality", blank=True)

    def __str__(self):
        return self.quality
