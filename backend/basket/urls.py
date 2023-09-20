from django.urls import path, include, resolve
from rest_framework.routers import DefaultRouter


# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'', views.BasketViewSet,
                basename='all_products')


# The API URLs are now determined automatically by the router.

app_name = "basket_api"

urlpatterns = [
    path('', include(router.urls)),
]

# urlpatterns = router.urls
