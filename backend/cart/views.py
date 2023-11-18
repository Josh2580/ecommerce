from django.shortcuts import render
from rest_framework import viewsets, mixins
from .models import Cart, CartItems
from .serializers import CartSerializer, CartItemSerializer, AddCartItemSerializer, UpdateCartItemSerializer
from django_filters.rest_framework import DjangoFilterBackend
from my_users.serializers import UserSerializer
import uuid

from django.contrib.auth import get_user_model
# from django.contrib.auth.models import User


User = get_user_model()
#


# Create your views here.
class CartViewSet(mixins.CreateModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin,
                  mixins.DestroyModelMixin,
                  mixins.ListModelMixin,
                  viewsets.GenericViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

    def get_queryset(self):
        user = self.request.user
        # print(str(user) == "AnonymousUser")
        if str(user) == "AnonymousUser":

            pk = self.kwargs.get("pk")
            if pk:
                single_cart = Cart(id=pk)
                uuid_cart = uuid.UUID(single_cart.id)
                print(type(uuid_cart))
                return Cart.objects.filter(id=uuid_cart)
            pass
        elif str(user) != "AnonymousUser":
            return Cart.objects.filter(owner=user.pk)
            # return Cart.objects.all()


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
