from django.urls import path, include
from rest_framework.routers import DefaultRouter
from my_users import views

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'all', views.UserViewSet, basename="user_urls")
router.register(r'customers', views.CustomersViewSet,
                basename="customers_urls")
router.register(r'address', views.AddressViewSet, basename="address_urls")


# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
]
