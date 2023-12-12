from django.db import models
from my_users.second_models import CustomerProfile
from product.models import Products
from cart.models import Cart, CartItems
from django.contrib.auth import get_user_model
from my_users.second_models import Address
# from django.contrib.auth.models import User

User = get_user_model()

# Create your models here.


class Order(models.Model):

    PAYMENT_STATUS_PENDING = "P"
    PAYMENT_STATUS_COMPLETE = "C"
    PAYMENT_STATUS_FAILED = "F"

    PAYMENT_STATUS_CHOICES = [
        (PAYMENT_STATUS_PENDING, "Pending"),
        (PAYMENT_STATUS_COMPLETE, "Complete"),
        (PAYMENT_STATUS_FAILED, "Failed"),
    ]

    customer = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="customer_orders")
    order_time = models.DateTimeField(auto_now_add=True)
    order_status = models.CharField(
        max_length=50, choices=PAYMENT_STATUS_CHOICES, default=PAYMENT_STATUS_PENDING)
    shipping_address = models.ForeignKey(
        Address, on_delete=models.SET_NULL, null=True, related_name="order_info")

    def __str__(self):
        # return str(self.order_status)
        return f"{self.order_status} - {self.id} - {self.order_items} - {self.customer.email}"

    @property
    def total_price(self):
        items = self.order_items.all()
        # Performing List Comprehension Below
        total = sum([item.quantity * item.product.price for item in items])
        return total

    @property
    def order_id(self):
        return (self.id)


class OrderItems(models.Model):
    order = models.ForeignKey(
        Order, on_delete=models.CASCADE, related_name="order_items")
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    quantity = models.PositiveSmallIntegerField(default=0)

    def __str__(self):
        return f"{self.product.title}"
