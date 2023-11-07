from rest_framework import viewsets
# from rest_framework import generics
from order.models import OrderItems, Order
from order.serializers import OrderSerializer, CreateOrderSerializer, OrderItemsSerializer
# Create your views here.


class OrderViewSet(viewsets.ModelViewSet):
    # queryset = Order.objects.all()
    # serializer_class = OrderSerializer

    def get_serializer_class(self):
        if self.request.method == "POST":
            return CreateOrderSerializer
        return OrderSerializer

    def get_queryset(self):
        user = self.request.user
        if user.is_staff:
            return Order.objects.all()
        return Order.objects.filter(customer_id=user.pk)

    def get_serializer_context(self):
        return {"user_id": self.request.user.id}


class OrderItemsViewSet(viewsets.ModelViewSet):
    queryset = OrderItems.objects.all()
    serializer_class = OrderItemsSerializer
    # lookup_field = 'order'
