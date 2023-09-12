from django.shortcuts import render
from rest_framework import viewsets
from django.contrib.auth import get_user_model
from users.serializers import UserSerializer, CustomersSerializer, AddressSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .accountModels import Customers, Address


# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    # permission_classes = [IsAuthenticatedOrReadOnly]
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    Additionally we also provide an extra `highlight` action.
    """
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer


class CustomersViewSet(viewsets.ModelViewSet):
    queryset = Customers.objects.all()
    serializer_class = CustomersSerializer


class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer
