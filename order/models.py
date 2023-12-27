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
    payment_method = models.CharField(max_length=255, null=True, blank=True)

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


class OrderAddress(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="user_order_address")
    order = models.OneToOneField(Order, on_delete=models.SET_NULL,
                                 null=True, blank=True, related_name="order_address")
    first_name = models.CharField(max_length=255, null=True, blank=True)
    last_name = models.CharField(max_length=255, null=True, blank=True)
    phone_number = models.CharField(max_length=55, null=True, blank=True)
    address = models.CharField(max_length=255, null=True, blank=True)
    descriptions = models.TextField(max_length=500, null=True, blank=True)
    postal_code = models.CharField(max_length=255, null=True, blank=True)
    city = models.CharField(max_length=255, null=True, blank=True)
    state = models.CharField(max_length=255, null=True, blank=True)
    country = models.CharField(max_length=255, null=True, blank=True)
    lga = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return f"{self.order} {self.first_name}  {self.address}"
