from rest_framework import serializers
from django.contrib.auth import get_user_model
from .second_models import CustomerProfile, Address
# from django.contrib.auth.models import User
from djoser.serializers import UserCreateSerializer
from cart.models import Cart
from order.serializers import OrderSerializer
from order.models import Order

User = get_user_model()


class MyUserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ["id", "email", "first_name", "last_name", "password"]


# class CustomersSerializer(serializers.ModelSerializer):
#     address = AddressSerializer
#     class Meta:
#         model = CustomerProfile
#         fields = ["id", "user", "mobile", "address"]
#         # depth = 1


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = "__all__"


class CustomersSerializer(serializers.ModelSerializer):
    # address = AddressSerializer()

    class Meta:
        model = CustomerProfile
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    # cart = serializers.PrimaryKeyRelatedField(
    #     many=True, queryset=Cart.objects.all())
    # cart = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = User
        # fields = "__all__"
        fields = ["id", "email", "first_name",
                  "last_name", "date_of_birth", "user_address", "is_seller", "user_order_address", "cart"]

        # exclude = ["password"]
