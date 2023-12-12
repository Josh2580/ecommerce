from rest_framework import serializers
from order.models import Order, OrderItems
from cart.models import CartItems, Cart
from cart.serializers import CartItemSerializer
from django.db import transaction
from product.serializers import ProductCartSerializer
from product.models import Products
from my_users.second_models import Address


class OrderItemsSerializer(serializers.ModelSerializer):
    # product = ProductCartSerializer()
    product = serializers.PrimaryKeyRelatedField(
        queryset=Products.objects.all())
    # product_id = serializers.IntegerField()

    class Meta:
        model = OrderItems
        fields = ["id", "product", "quantity"]
        # depth = 1


class OrderSerializer(serializers.ModelSerializer):
    order_items = OrderItemsSerializer(many=True, read_only=True)
    # shipping_address = serializers.PrimaryKeyRelatedField(
    #     read_only=True)

    class Meta:
        model = Order
        fields = ["id",  "order_id", "customer",
                  "order_status", "order_time", "order_items", "total_price", "shipping_address"]
        # depth = 1


class CreateOrderSerializer(serializers.Serializer):
    cart_id = serializers.UUIDField()
    order_id = serializers.IntegerField(read_only=True)

    def save(self, **kwargs):
        with transaction.atomic():
            imp_cart_id = self.validated_data["cart_id"]
            imp_user_id = self.context["user_id"]
            global order, my_id
            order = Order.objects.create(customer_id=imp_user_id)
            my_id = order.id
            cart_items = CartItems.objects.filter(cart_id=imp_cart_id)
            order_items = [
                OrderItems(
                    order=order,
                    product=item.product,
                    quantity=item.quantity
                )
                for item in cart_items
            ]
            OrderItems.objects.bulk_create(order_items)
            Cart.objects.filter(id=imp_cart_id).delete()
            return order

    def to_representation(self, instance):
        #     # Customize the representation of the entire serialized instance here, the return response
        representation = super().to_representation(instance)
        representation['cart_id'] = f"Customized: {representation['cart_id']}"
        representation['order_id'] = f"Customized Order Id: {my_id}"
        return representation
