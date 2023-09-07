from rest_framework import serializers
from .models import Order, OrderItems


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ["id", "customer", "order_time"]
        # depth = 1


class OrderItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItems
        fields = "__all__"
        depth = 1
