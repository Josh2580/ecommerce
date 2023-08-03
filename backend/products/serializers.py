from rest_framework import serializers
from products.models import Product, ProductColor, ProductSize, ProductQuality


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        # fields = "__all__"
        fields = ["id", "name", "category",
                  "color", "price", "size", "quality"]

        # exclude = ["price", "color"]


class ProductColorSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductColor
        fields = ["id", "color", "products"]
        # depth = 1


class ProductSizeSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductSize
        fields = ["id", "size", "products"]
        # depth = 1


class ProductQualitySerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductQuality
        fields = ["id", "quality", "products"]
        # depth = 1
