from django.urls import path, include, resolve
# from rest_framework.routers import DefaultRouter
from rest_framework_nested import routers

from order import views

# Create a router and register our viewsets with it.
router = routers.DefaultRouter()
router.register(r'all', views.OrderViewSet,
                basename='all_order')

order_router = routers.NestedDefaultRouter(router, "all", lookup='order')
order_router.register('items', views.OrderItemsViewSet,
                      basename="order_items")

# The API URLs are now determined automatically by the router.

urlpatterns = [
    path('', include(router.urls)),
    path('', include(order_router.urls)),

]


# urlpatterns = router.urls
