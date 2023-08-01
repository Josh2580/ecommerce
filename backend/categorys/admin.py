from django.contrib import admin
from categorys.models import ProductCategory, ParentProductCategory

# Register your models here.


admin.site.register(ParentProductCategory)
admin.site.register(ProductCategory)
