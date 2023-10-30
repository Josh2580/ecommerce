from rest_framework import serializers
from cart.models import Cart, CartItems
from product.models import Products
from product.serializers import ProductSerializer


class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(many=False)
    sub_total = serializers.SerializerMethodField(method_name="total")

    class Meta:
        model = CartItems
        fields = ["id", "cart", "product", "quantity", "sub_total"]
        # depth = 1

    def total(self, cartItem: CartItems):
        return cartItem.quantity * cartItem.product.price


class CartSerializer(serializers.ModelSerializer):
    id = serializers.UUIDField(read_only=True)
    items = CartItemSerializer(many=True, read_only=True)
    grand_total = serializers.SerializerMethodField(method_name="main_total")

    class Meta:
        model = Cart
        fields = ["id", "items", "grand_total"]

    def main_total(self, cart: Cart):
        items = cart.items.all()
        total = sum([item.quantity * item.product.price for item in items])
        return total


class AddCartItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = CartItems
        fields = ["id", "cart", "product", "quantity"]
