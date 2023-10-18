from django.db import models
from django.contrib.auth import get_user_model
# from django.contrib.auth.models import User

User = get_user_model()


class CustomerProfile(models.Model):
    account = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="customer_profile")
    mobile = models.PositiveBigIntegerField(blank=True, null=True)
    address = models.ForeignKey(
        "Address", on_delete=models.SET_NULL, null=True, related_name="customer_address")

    def __str__(self):
        # return f"{self.user.first_name} {self.user.last_name}"
        return f"{self.account}"


class Address(models.Model):
    address = models.CharField(max_length=255, null=True, blank=True)
    postal_code = models.CharField(max_length=255, null=True, blank=True)
    city = models.CharField(max_length=255, null=True, blank=True)
    state = models.CharField(max_length=255, null=True, blank=True)
    country = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return f"{self.address}"
