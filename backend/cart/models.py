from django.db import models
import uuid
from product.models import Products

# Create your models here.


class Cart(models.Model):
    id = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.id)


class CartItems(models.Model):
    cart = models.ForeignKey(
        Cart, on_delete=models.CASCADE, related_name="items", null=True, blank=True)
    product = models.ForeignKey(
        Products, on_delete=models.CASCADE, related_name="cartItems", null=True, blank=True)
    quantity = models.IntegerField(default=0)
