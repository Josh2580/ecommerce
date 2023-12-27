from django.shortcuts import render
from rest_framework import viewsets, mixins
from .models import Cart, CartItems
from .serializers import CartSerializer, NewCartSerializer, CartItemSerializer, AddCartItemSerializer, UpdateCartItemSerializer
from django_filters.rest_framework import DjangoFilterBackend
from my_users.serializers import UserSerializer
import uuid

from django.contrib.auth import get_user_model
# from django.contrib.auth.models import User


User = get_user_model()
#

# Create your views here.

# global current_cart_pk


class CartViewSet(mixins.CreateModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin,
                  mixins.DestroyModelMixin,
                  mixins.ListModelMixin,
                  viewsets.GenericViewSet):
    queryset = Cart.objects.all()
    # serializer_class = CartSerializer

    def get_queryset(self):
        user = self.request.user
        current_cart_pk = self.kwargs.get("pk")

        if str(user) == "AnonymousUser":

            if current_cart_pk:
                single_cart = Cart(id=current_cart_pk)
                uuid_cart = uuid.UUID(single_cart.id)
                # print(type(uuid_cart))
                return Cart.objects.filter(id=uuid_cart)
            pass
        elif str(user) != "AnonymousUser":
            # print(type(str("current_cart_pk")))
            if self.request.method == "PUT" or "PATCH" and current_cart_pk:
                return Cart.objects.filter(id=str(current_cart_pk))
            return Cart.objects.filter(owner=user.pk)

    def get_serializer_class(self):
        user = self.request.user
        if self.request.method == "POST":
            if str(user) == "AnonymousUser":
                return CartSerializer
            elif str(user) != "AnonymousUser":
                return NewCartSerializer
        return CartSerializer

    def get_serializer_context(self):
        return {"user_id": self.request.user.id}


class CartItemsViewSet(viewsets.ModelViewSet):
    http_method_names = ["get", "post", "patch", "delete"]

    def get_queryset(self):
        return CartItems.objects.filter(cart_id=self.kwargs["cart_pk"])

    def get_serializer_class(self):
        if self.request.method == "POST":
            return AddCartItemSerializer
        elif self.request.method == "PATCH":
            return UpdateCartItemSerializer
        return CartItemSerializer

    def get_serializer_context(self):
        return {"cart_id": self.kwargs["cart_pk"]}

    # filter_backends = [DjangoFilterBackend]
    # filterset_fields = ['cart']
