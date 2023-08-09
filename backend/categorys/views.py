from django.shortcuts import render
from rest_framework import viewsets
from drf_multiple_model.views import ObjectMultipleModelAPIView, FlatMultipleModelAPIView
from categorys.models import ProductCategory, ParentProductCategory
from categorys.serializers import CategorySerializer, ParentCategorySerializer, CategoryNameSerializer

# Create your views here.


class ParentCategoryViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    Additionally we also provide an extra `highlight` action.
    """
    queryset = ParentProductCategory.objects.all()
    serializer_class = ParentCategorySerializer
    filterset_fields = ["name", "created_at"]


class CategoryViewSet(viewsets.ModelViewSet):

    queryset = ProductCategory.objects.all()
    serializer_class = CategorySerializer
    filterset_fields = ["name", "created_at"]


class CategoryNameViewSet(viewsets.ModelViewSet):

    queryset = ProductCategory.objects.all()
    serializer_class = CategoryNameSerializer
    # filterset_fields = ["name", "created_at"]
