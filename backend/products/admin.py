from django.contrib import admin
from products import models

# Register your models here.


class ProductAdmin(admin.ModelAdmin):
    list_display = ["title", "category", "image", "price", "category_name"]
    list_display_links = ["title", "price"]
    pass


class ProductColorAdmin(admin.ModelAdmin):
    list_display = ["color"]
    pass


admin.site.register(models.Product, ProductAdmin)
admin.site.register(models.ProductColor, ProductColorAdmin)
admin.site.register(models.ProductSize)
admin.site.register(models.ProductQuality)
admin.site.register(models.ProductRating)
admin.site.register(models.ProductImages)
