from rest_framework import serializers
from order.models import Order, OrderItems, OrderAddress
from cart.models import CartItems, Cart
from cart.serializers import CartItemSerializer
from django.db import transaction
from product.serializers import ProductCartSerializer
from product.models import Products


class OrderItemsSerializer(serializers.ModelSerializer):
    product = serializers.PrimaryKeyRelatedField(
        queryset=Products.objects.all())

    class Meta:
        model = OrderItems
        fields = ["id", "product", "quantity"]
        # depth = 1


class OrderSerializer(serializers.ModelSerializer):
    order_items = OrderItemsSerializer(many=True, read_only=True)
    # order_address = serializers.PrimaryKeyRelatedField(
    #     read_only=True)

    class Meta:
        model = Order
        fields = ["id",  "order_id", "customer",
                  "order_status", "order_time", "order_items", "total_price", "order_address", "payment_method"]
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
        representation['order_id'] = f"{my_id}"
        return representation


class OrderAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderAddress
        fields = "__all__"
