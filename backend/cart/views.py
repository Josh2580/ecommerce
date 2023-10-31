from django.shortcuts import render
from rest_framework import viewsets
from .models import Cart, CartItems
from .serializers import CartSerializer, CartItemSerializer, AddCartItemSerializer
from django_filters.rest_framework import DjangoFilterBackend
#


# Create your views here.


class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer


class CartItemsViewSet(viewsets.ModelViewSet):

    def get_queryset(self):
        return CartItems.objects.filter(cart_id=self.kwargs["cart_pk"])

    def get_serializer_class(self):
        if self.request.method == "POST":
            return AddCartItemSerializer
        return CartItemSerializer

    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['cart']
