from django.contrib import admin
from products.models import Product, ProductColor, ProductQuality, ProductSize, ProductRating

# Register your models here.


class ProductAdmin(admin.ModelAdmin):
    list_display = ["title", "category", "image", "price", "category_name"]
    list_display_links = ["title", "price"]
    pass


class ProductColorAdmin(admin.ModelAdmin):
    list_display = ["color"]
    pass


admin.site.register(Product, ProductAdmin)
admin.site.register(ProductColor, ProductColorAdmin)
admin.site.register(ProductSize)
admin.site.register(ProductQuality)
admin.site.register(ProductRating)
