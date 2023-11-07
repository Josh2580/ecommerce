from django.db import models
from my_users.second_models import CustomerProfile
from product.models import Products
from django.contrib.auth import get_user_model
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
    pending_status = models.CharField(
        max_length=50, choices=PAYMENT_STATUS_CHOICES, default=PAYMENT_STATUS_PENDING)

    def __str__(self):
        # return str(self.pending_status)
        return f"{self.pending_status} - {self.customer.email}"


class OrderItems(models.Model):
    order = models.ForeignKey(
        Order, on_delete=models.CASCADE, related_name="order_items")
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    quantity = models.PositiveSmallIntegerField(default=0)

    def __str__(self):
        return f"{self.product.title}"
