from django.contrib import admin
from django import forms
from users.models import User
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import ReadOnlyPasswordHashField
# from django.core.exceptions import ValidationError
from users.accountModels import Customers, Address

# Register your models here.


class UserChangeForm(forms.ModelForm):
    """A form for updating users. Includes all the fields on
    the user, but replaces the password field with admin's
    disabled password hash display field.
    """

    password = ReadOnlyPasswordHashField()

    class Meta:
        model = User
        fields = ["email", "password",
                  "date_of_birth", "is_active", "is_admin"]


class UserAdminConfig(UserAdmin):
    list_display = ("email", "first_name", "last_name")
    fieldsets = [
        (None, {"fields": ["email", "password"]}),
        ("Personal info", {"fields": ["first_name", "last_name"]}),
        ("Permissions", {"fields": ["is_admin",
         "is_active", "is_staff", "is_superuser"]}),

    ]
    ordering = ["email"]
    filter_horizontal = []
    list_filter = ["first_name"]


admin.site.register(User, UserAdminConfig)
admin.site.register(Customers)
admin.site.register(Address)
