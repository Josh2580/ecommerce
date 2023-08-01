from django.urls import path, include
from rest_framework.routers import DefaultRouter
from categorys import views

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'parent', views.ParentCategoryViewSet,
                basename="product_category_urls")
router.register(r'sub', views.CategoryViewSet,
                basename="product_sub_category_urls")

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
]
