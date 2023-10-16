from django.db import models
from my_users.second_models import Customers
from product.models import Products

# Create your models here.


class Order(models.Model):
    customer = models.ForeignKey(
        Customers, on_delete=models.CASCADE, related_name="customer_orders")
    order_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.customer)


class OrderItems(models.Model):
    order = models.ForeignKey(
        Order, on_delete=models.CASCADE, related_name="order_items")
    product = models.ForeignKey(Products, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.product}"
