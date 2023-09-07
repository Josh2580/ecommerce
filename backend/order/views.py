from rest_framework import viewsets
# from rest_framework import generics

from order.models import OrderItems, Order
from order.serializers import OrderSerializer, OrderItemsSerializer
# Create your views here.


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderItemsViewSet(viewsets.ModelViewSet):
    queryset = OrderItems.objects.all()
    serializer_class = OrderItemsSerializer
