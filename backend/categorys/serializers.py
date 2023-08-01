from rest_framework import serializers
from categorys.models import ProductCategory, ParentProductCategory


class CategorySerializer(serializers.ModelSerializer):
    # parent = serializers.PrimaryKeyRelatedField(
    #     queryset=ProductCategory.objects.all(), many=True)
    # parent = serializers.StringRelatedField(many=True)

    class Meta:
        model = ProductCategory
        # fields = ["id", "name",
        #           "image", "created_at", "modified_at", "main_category"]
        fields = "__all__"
        # depth = 1
        # exclude = ["parent"]


class ParentCategorySerializer(serializers.ModelSerializer):
    main_category = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = ParentProductCategory
        fields = ["id", "name", "image", "created_at",
                  "modified_at", "main_category"]
        # depth = 2

    # def create(self, validated_data):
    #     main_category_data = validated_data.pop('tracks')
    #     parent_category = ParentProductCategory.objects.create(
    #         **validated_data)
    #     for category_data in main_category_data:
    #         ProductCategory.objects.create(
    #             parent_category=parent_category, **category_data)
    #     return parent_category
