from django.urls import path, include, resolve
from rest_framework.routers import DefaultRouter
# from rest_framework_nested import routers
from product import views

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'all', views.ProductViewSet,
                basename='all_products')


router.register(r'color', views.ProductColorViewSet,
                basename="product_color_urls")

router.register(r'quality', views.ProductQualityViewSet,
                basename="product_quality_urls")

router.register(r'size', views.ProductSizeViewSet,
                basename="product_size_urls")

router.register(r'rating', views.ProductRatingViewSet,
                basename="product_rating_urls")

# product_router = routers.NestedDefaultRouter(
#     router, r"all", lookup="product_pk")

# product_router.register(r'color', views.ProductColorViewSet,
#                         basename="product_color_urls")

# The API URLs are now determined automatically by the router.

urlpatterns = [
    path(r'', include(router.urls)),
    # path(r'', include(product_router.urls)),

]

# urlpatterns = [
#     path('', views.ProductViewSet.as_view(), name="product_now"),
# ]

# urlpatterns = router.urls
