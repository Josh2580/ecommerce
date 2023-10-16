from django.contrib import admin
from category.models import ProductCategory, ParentProductCategory, Vendor

# Register your models here.


admin.site.register(ParentProductCategory)
admin.site.register(ProductCategory)
admin.site.register(Vendor)
