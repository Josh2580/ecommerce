from rest_framework import serializers
from django.contrib.auth import get_user_model
from .second_models import CustomerProfile, Address
# from django.contrib.auth.models import User

User = get_user_model()


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

    class Meta:
        model = User
        # fields = "__all__"
        fields = ["id", "email", "first_name",
                  "last_name", "date_of_birth", "is_seller"]

        # exclude = ["password"]

    # def create(self, validated_data):
    #     users_data = validated_data.pop('customer_profile')
    #     user = User.objects.create(**validated_data)
    #     for user_data in users_data:
    #         Customers.objects.create(user=user, **user_data)
    #     return user
