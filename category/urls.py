from django.urls import path, include
from rest_framework.routers import DefaultRouter
from category import views

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'parent', views.ParentCategoryViewSet,
                basename="product_category_urls")
router.register(r'main', views.CategoryViewSet,
                basename="product_main_category_urls")

router.register(r'vendor', views.VendorViewSet,
                basename="vendor_urls")

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
]
