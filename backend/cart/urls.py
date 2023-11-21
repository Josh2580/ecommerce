from django.urls import path, include, resolve
# from rest_framework.routers import DefaultRouter
from rest_framework_nested import routers

from cart import views

# Create a router and register our viewsets with it.
router = routers.DefaultRouter()
router.register('all', views.CartViewSet)


cart_router = routers.NestedDefaultRouter(router, "all", lookup='cart')

cart_router.register('items', views.CartItemsViewSet,
                     basename="cart_items")


# The API URLs are now determined automatically by the router.

urlpatterns = [
    path('', include(router.urls)),
    path('', include(cart_router.urls)),

]
