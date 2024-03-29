from rest_framework import serializers
from product import models
from django.conf import settings


class ProductCartSerializer(serializers.ModelSerializer):
    # image = serializers.SerializerMethodField(method_name="image_url")
    hosted_image_url = serializers.SerializerMethodField()

    class Meta:
        model = models.Products
        fields = ["id", "title", "image", "hosted_image_url",
                  "quantity",  "price"]

    def get_hosted_image_url(self, obj):
        request = self.context.get('request')
        # request = self

        # print(f"the object: {obj.image}")
        # print(f"the request: {request}")

        if request and obj.image:
            return request.build_absolute_uri(settings.MEDIA_URL + str(obj.image))
        return None
        # pass


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
    # color = ProductColorSerializer(many=True, required=False)
    color = serializers.PrimaryKeyRelatedField(
        many=True, queryset=models.ProductColor.objects.all())

    size = ProductSizeSerializer(many=True, required=False)
    quality = ProductQualitySerializer(many=True, required=False)
    product_images = ProductImageSerializer(many=True, required=False)

    class Meta:
        model = models.Products
        # fields = "__all__"
        # fields = ["id", "user", "title",
        #           "color", "price", ]
        fields = ["id", "imageUrl", "user", "title", "product_ratings", "vendor", "category", "category_name",
                  "color", "price", "size",  "quality", "image", "product_images", "description", "quantity"]

        # exclude = ["price", "color"]

    # def get_hosted_image_url(self, obj):
    #     request = self.context.get('request')
    #     # request = self

    #     print(f"the object: {obj.image}")
    #     print(f"the request: {request}")

    #     if request and obj.image:
    #         return request.build_absolute_uri(settings.MEDIA_URL + str(obj.image))
    #     return None

    def create(self, validated_data):
        color_data = validated_data.pop("color")
        product = models.Products.objects.create(**validated_data)
        for colors in color_data:
            models.ProductColor.objects.create(products=product, **colors)
        return product


class ProductRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductRating
        fields = "__all__"

        # fields = ["id", "customer", "products",
        #           "rating", "reviews", "add_time"]
