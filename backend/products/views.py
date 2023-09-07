from rest_framework import viewsets
# from rest_framework import generics

from products.models import Product, ProductColor, ProductQuality, ProductSize
from products.serializers import ProductSerializer, ProductColorSerializer, ProductQualitySerializer, ProductSizeSerializer
# Create your views here.


class ProductViewSet(viewsets.ModelViewSet):

    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    # filterset_fields = ["name", "price"]

    # def perform_create(self, serializer):
    #     serializer.save(color=self.request.data)
    #     print(serializer.data)

# class ProductViewSet(generics.ListCreateAPIView):

#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer
#     filterset_fields = ["name", "price"]


class ProductColorViewSet(viewsets.ModelViewSet):

    queryset = ProductColor.objects.all()
    serializer_class = ProductColorSerializer


class ProductSizeViewSet(viewsets.ModelViewSet):

    queryset = ProductSize.objects.all()
    serializer_class = ProductSizeSerializer


class ProductQualityViewSet(viewsets.ModelViewSet):

    queryset = ProductQuality.objects.all()
    serializer_class = ProductQualitySerializer
