from rest_framework import serializers
from django.contrib.auth import get_user_model
from .accountModels import Customers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        # fields = "__all__"
        exclude = ["password"]


class CustomersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customers
        fields = ["id", "user", "mobile"]
        depth = 1
