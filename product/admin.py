from django.contrib import admin
from product import models

# Register your models here.


# class ProductImagesInline(admin.StackedInline):
#     model = models.ProductImages


# class ProductAdmin(admin.ModelAdmin):
#     list_display = ["title", "category", "image", "price", "category_name"]
#     list_display_links = ["title", "price"]
#     prepopulated_fields = {"slug": ("title", )}
#     inlines = [ProductImagesInline,]


# class ProductColorAdmin(admin.ModelAdmin):
#     list_display = ["color"]
#     pass


admin.site.register(models.Products)
admin.site.register(models.ProductColor)
admin.site.register(models.ProductSize)
admin.site.register(models.ProductQuality)
admin.site.register(models.ProductRating)
admin.site.register(models.ProductImages)
