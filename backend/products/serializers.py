from rest_framework import serializers
from products.models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        # fields = ["name", "parent"]
        fields = "__all__"
        depth = 2
