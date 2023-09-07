from rest_framework import serializers
from categorys.models import ProductCategory, ParentProductCategory, Vendor
from products.serializers import ProductSerializer
from products.models import Product


class CategorySerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = ProductCategory
        fields = ["id", "name",
                  "image", "created_at", "modified_at", "parent", "products"]
        # depth = 1
        # exclude = ["parent"]


class ParentCategorySerializer(serializers.ModelSerializer):
    main_category = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = ParentProductCategory
        fields = ["id", "name", "image", "created_at",
                  "modified_at", "main_category"]


class VendorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Vendor
        fields = "__all__"
