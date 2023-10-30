from django.urls import path, include, resolve
from rest_framework.routers import DefaultRouter
from cart import views

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'all', views.CartViewSet,
                basename='cart')

router.register(r'items', views.CartItemsViewSet,
                basename="cart_items")

# router.register(r'size', views.ProductSizeViewSet,
#                 basename="product_size_urls")

# The API URLs are now determined automatically by the router.

urlpatterns = [
    path('', include(router.urls)),
]
