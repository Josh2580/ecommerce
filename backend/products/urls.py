from django.urls import path, include, resolve
from rest_framework.routers import DefaultRouter
from products import views

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'', views.ProductViewSet,
                basename='product_nows')


# router.register(r'color', views.ProductColorViewSet,
#                 basename="product_color_urls")

# router.register(r'quality', views.ProductQualityViewSet,
#                 basename="product_quality_urls")

# router.register(r'size', views.ProductSizeViewSet,
#                 basename="product_size_urls")

# The API URLs are now determined automatically by the router.

urlpatterns = [
    path('', include(router.urls)),
]

# urlpatterns = [
#     path('', views.ProductViewSet.as_view(), name="product_now"),
# ]

# urlpatterns = router.urls
