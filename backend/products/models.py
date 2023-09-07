from django.db import models
from categorys.models import ProductCategory, Vendor
from django.contrib.auth import get_user_model


User = get_user_model()


# Create your models here.
class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    vendor = models.ForeignKey(Vendor, on_delete=models.SET_NULL, null=True)
    category = models.ForeignKey(
        ProductCategory, on_delete=models.SET_NULL, null=True, related_name="products")
    image = models.ImageField(null=True, blank=True,
                              upload_to=f"products/images/")
    description = models.TextField(null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return f"{self.title}"

    def category_name(self):
        catName = ProductCategory.objects.get(name=self.category)
        return str(catName.name)


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
