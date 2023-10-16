from rest_framework import serializers
from product import models


class ProductColorSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.ProductColor
        fields = "__all__"

        # fields = ["id", "color", "products"]
        # depth = 1


class ProductSizeSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.ProductSize
        fields = "__all__"

        # fields = ["id", "size", "products"]
        # depth = 1


class ProductImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.ProductImages
        # fields = ["id", "products", "images"]
        fields = "__all__"

        # depth = 1


class ProductQualitySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductQuality
        # fields = ["id", "quality", "products"]
        fields = "__all__"

        # depth = 1


class ProductSerializer(serializers.ModelSerializer):
    color = ProductColorSerializer(many=True, required=False)
    size = ProductSizeSerializer(many=True, required=False)
    quality = ProductQualitySerializer(many=True, required=False)
    product_images = ProductImageSerializer(many=True, required=False)

    class Meta:
        model = models.Products
        fields = "__all__"
        # fields = ["id", "user", "title", "product_ratings", "vendor", "category", "category_name",
        #           "color", "price", "size",  "quality", "image", "product_images", "description", "quantity"]

        # exclude = ["price", "color"]

        # def create(self, validated_data):
        #     color = validated_data.pop('color')
        #     product = Product.objects.create(**validated_data)
        #     ProductColor.objects.create(product=product, **color)
        #     return product


class ProductRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductRating
        fields = "__all__"

        # fields = ["id", "customer", "products",
        #           "rating", "reviews", "add_time"]
