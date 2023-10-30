from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)


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
    path('orders/', include("order.urls")),
    path('cart/', include("cart.urls")),

]
