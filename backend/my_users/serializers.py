from rest_framework import serializers
from django.contrib.auth import get_user_model
from .second_models import CustomerProfile, Address
# from django.contrib.auth.models import User
from djoser.serializers import UserCreateSerializer
from cart.models import Cart

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
    customer = serializers.PrimaryKeyRelatedField(
        queryset=CustomerProfile.objects.all(), many=True)

    class Meta:
        model = Address
        fields = "__all__"
        # depth = 1


class CustomersSerializer(serializers.ModelSerializer):
    # address = AddressSerializer()

    class Meta:
        model = CustomerProfile
        fields = "__all__"
        # fields = ["id",  "email", "first_name"]
        # depth = 1


class UserSerializer(serializers.ModelSerializer):
    # cart = serializers.PrimaryKeyRelatedField(
    #     many=True, queryset=Cart.objects.all())
    # cart = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = User
        # fields = "__all__"
        fields = ["id", "email", "first_name",
                  "last_name", "date_of_birth", "is_seller", "cart"]

        # exclude = ["password"]

    # def create(self, validated_data):
    #     users_data = validated_data.pop('customer_profile')
    #     user = User.objects.create(**validated_data)
    #     for user_data in users_data:
    #         Customers.objects.create(user=user, **user_data)
    #     return user
