from rest_framework import serializers
from django.contrib.auth import get_user_model
from .accountModels import Customers, Address


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        # fields = "__all__"
        exclude = ["password"]


# class CustomersSerializer(serializers.ModelSerializer):
#     address = AddressSerializer
#     class Meta:
#         model = Customers
#         fields = ["id", "user", "mobile", "address"]
#         # depth = 1


class AddressSerializer(serializers.ModelSerializer):
    customer = serializers.PrimaryKeyRelatedField(
        queryset=Customers.objects.all(), many=True)

    class Meta:
        model = Address
        fields = "__all__"
        # depth = 1


class CustomersSerializer(serializers.ModelSerializer):
    address = AddressSerializer()

    class Meta:
        model = Customers
        fields = ["id", "user", "mobile", "address"]
        # depth = 1
