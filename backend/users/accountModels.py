from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()


class Customers(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="products")
    mobile = models.PositiveBigIntegerField(blank=True, null=True)

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"

    # def users_name(self):
    #     Name = User.objects.get(id=self.user)
    #     return str(Name.first_name)
