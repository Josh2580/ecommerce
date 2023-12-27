from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from drf_multiple_model.views import ObjectMultipleModelAPIView, FlatMultipleModelAPIView
from category.models import ProductCategory, ParentProductCategory, Vendor
from category.serializers import CategorySerializer, ParentCategorySerializer, VendorSerializer

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
    permission_classes = [IsAuthenticatedOrReadOnly]


class CategoryViewSet(viewsets.ModelViewSet):

    queryset = ProductCategory.objects.all()
    serializer_class = CategorySerializer
    filterset_fields = ["name", "created_at"]


class VendorViewSet(viewsets.ModelViewSet):

    queryset = Vendor.objects.all()
    serializer_class = VendorSerializer
