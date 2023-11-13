from rest_framework import serializers
from order.models import Order, OrderItems
from cart.models import CartItems, Cart
from django.db import transaction


class OrderItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItems
        fields = "__all__"
        # depth = 1


class OrderSerializer(serializers.ModelSerializer):
    # order_items = OrderItemsSerializer(many=True)

    class Meta:
        model = Order
        fields = ["id", "customer", "order_items",
                  "order_status", "order_items"]
        # fields = "__all__"


class CreateOrderSerializer(serializers.Serializer):
    cart_id = serializers.UUIDField()

    def save(self, **kwargs):
        with transaction.atomic():
            imp_cart_id = self.validated_data["cart_id"]
            imp_user_id = self.context["user_id"]
            order = Order.objects.create(customer_id=imp_user_id)
            cart_items = CartItems.objects.filter(cart_id=imp_cart_id)
            # print(f"Cart ID: {imp_cart_id}")
            # print(f"User ID: {imp_user_id}")
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

    class Meta:
        model = Order
        fields = ["id", "customer", "order_items",
                  "pending_status", "order_items"]
        # fields = "__all__"
