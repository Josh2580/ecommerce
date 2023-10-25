from rest_framework import viewsets, permissions
# from rest_framework import generics

from product import models, serializers
# Create your views here.


class ProductViewSet(viewsets.ModelViewSet):
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    # permission_classes = [permissions.IsAuthenticated]

    queryset = models.Products.objects.all()
    serializer_class = serializers.ProductSerializer
    # filterset_fields = ["name", "price"]

    # def perform_create(self, serializer):
    #     serializer.save(color=self.request.data)
    #     print(serializer.data)

# class ProductViewSet(generics.ListCreateAPIView):

#     queryset = models.Product.objects.all()
#     serializer_class = serializers.ProductSerializer
#     filterset_fields = ["name", "price"]


class ProductColorViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]

    queryset = models.ProductColor.objects.all()
    serializer_class = serializers.ProductColorSerializer


class ProductSizeViewSet(viewsets.ModelViewSet):

    queryset = models.ProductSize.objects.all()
    serializer_class = serializers.ProductSizeSerializer


class ProductQualityViewSet(viewsets.ModelViewSet):

    queryset = models.ProductQuality.objects.all()
    serializer_class = serializers.ProductQualitySerializer


class ProductRatingViewSet(viewsets.ModelViewSet):

    queryset = models.ProductRating.objects.all()
    serializer_class = serializers.ProductRatingSerializer
