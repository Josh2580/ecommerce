from django.db import models
import uuid
from product.models import Products
from django.contrib.auth import get_user_model
# from django.contrib.auth.models import User

User = get_user_model()

# Create your models here.


class Cart(models.Model):
    id = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True, related_name="cart")

    def __str__(self):
        return f"{self.id} - {self.owner}"


class CartItems(models.Model):
    cart = models.ForeignKey(
        Cart, on_delete=models.CASCADE, related_name="items", null=True, blank=True)
    product = models.ForeignKey(
        Products, on_delete=models.CASCADE, related_name="cartItems", null=True, blank=True)
    quantity = models.PositiveIntegerField(default=1)
