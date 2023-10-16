from rest_framework import serializers
from category.models import ProductCategory, ParentProductCategory, Vendor
from product.serializers import ProductSerializer
from product.models import Products as Product


class CategorySerializer(serializers.ModelSerializer):
    # products = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = ProductCategory
        # fields = ["id", "name",
        #           "image", "created_at", "modified_at", "parent", "products"]
        fields = "__all__"

        # depth = 1
        # exclude = ["parent"]


class ParentCategorySerializer(serializers.ModelSerializer):
    # main_category = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = ParentProductCategory
        # fields = ["id", "name", "image", "created_at",
        #           "modified_at", "main_category"]
        fields = "__all__"


class VendorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Vendor
        fields = "__all__"
