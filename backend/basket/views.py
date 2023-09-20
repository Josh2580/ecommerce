from django.shortcuts import render
from rest_framework import viewsets


# Create your views here.


class BasketViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
