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
    product_id = serializers.IntegerField()

    def validate_product_id(self, value):
        if not Products.objects.filter(pk=value).exists():
            raise serializers.ValidationError(
                "There is no product associated with the given ID")
        return value

    def save(self, **kwargs):
        cart_id = self.context["cart_id"]
        product_id = self.validated_data['product_id']
        quantity = self.validated_data['quantity']

        try:
            cartItems = CartItems.objects.get(
                product_id=product_id, cart_id=cart_id)
            cartItems.quantity += quantity
            cartItems.save()

            self.instance = cartItems

        except:
            self.instance = cartItems = CartItems.objects.create(
                product_id=product_id, cart_id=cart_id, quantity=quantity)

        return self.instance

    class Meta:
        model = CartItems
        # fields = ["id", "product", "quantity"]
        fields = ["id", "product_id", "quantity"]
