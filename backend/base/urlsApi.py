from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from cart.views import CartViewSet
from order.views import OrderViewSet

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)
router = DefaultRouter()
router.register('cart', CartViewSet,
                basename="cart")
router.register('orders', OrderViewSet,
                basename="orders")


urlpatterns = [
    path('users/', include("my_users.urls")),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    # path('auth/', include('rest_framework.urls')),

    # path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),

    path('categorys/', include("category.urls")),
    path('products/', include("product.urls")),
    path('', include(router.urls)),


]

# urlpatterns += router.urls

# Create a router and register our viewsets with it.


# The API URLs are now determined automatically by the router.

# urlpatterns = [
#     path('', include(router.urls)),
# ]
