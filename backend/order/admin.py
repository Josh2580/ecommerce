from django.contrib import admin
from .models import Order, OrderItems

# Register your models here.


class OrderAdmin(admin.ModelAdmin):
    list_display = ["customer", "order_status", "order_time", "order_id"]
    list_display_links = ["order_time", "customer"]
    # prepopulated_fields = {"slug": ("title", )}
    # inlines = [ProductImagesInline,]


admin.site.register(Order, OrderAdmin)
admin.site.register(OrderItems)
