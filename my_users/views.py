from django.shortcuts import render
from rest_framework import viewsets
from django.contrib.auth import get_user_model
from my_users.serializers import UserSerializer, CustomersSerializer, AddressSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from my_users.second_models import CustomerProfile, Address
# from django.contrib.auth.models import User


# Create your views here.

User = get_user_model()


class UserViewSet(viewsets.ModelViewSet):
    # permission_classes = [IsAuthenticatedOrReadOnly]
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    Additionally we also provide an extra `highlight` action.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


class CustomersViewSet(viewsets.ModelViewSet):
    queryset = CustomerProfile.objects.all()
    serializer_class = CustomersSerializer


class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer

    def get_queryset(self):
        user = self.request.user
        address_pk = self.kwargs.get("pk")

        if str(user) == "AnonymousUser":
            if address_pk:
                return Address.objects.filter(user_id=address_pk)
            pass
        elif str(user) != "AnonymousUser":
            return Address.objects.filter(user_id=user.pk)
