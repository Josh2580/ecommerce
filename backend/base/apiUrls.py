from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('users/', include("users.urls")),
    path('categorys/', include("categorys.urls")),
    path('products/', include("products.urls")),
]
