from django.contrib import admin
from products.models import Product, ProductColor, ProductQuality, ProductSize

# Register your models here.


class ProductAdmin(admin.ModelAdmin):
    list_display = ["name", "category", "image", "price"]
    list_display_links = ["name", "price"]
    pass


class ProductColorAdmin(admin.ModelAdmin):
    list_display = ["color"]
    pass


admin.site.register(Product, ProductAdmin)
admin.site.register(ProductColor, ProductColorAdmin)
admin.site.register(ProductSize)
admin.site.register(ProductQuality)
