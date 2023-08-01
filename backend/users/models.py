from django.db import models
# from django.contrib.auth.base_user import BaseUserManager, AbstractBaseUser
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin, AbstractUser

# Create your models here.


class CustomUserManager(BaseUserManager):
    """
        Creates and saves a User with the given email, first_name, last_name and password.
        """

    def create_user(self, email, first_name, last_name, password, **other_fields):
        # The required field customization
        if not email:
            raise ValueError("Email is required")

        if not first_name:
            raise ValueError("First name is required")

        if not last_name:
            raise ValueError("First name is required")
        # ends here.

        user = self.model(
            email=self.normalize_email(email),
            first_name=first_name,
            last_name=last_name,
            password=password,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, first_name, last_name, password=None):

        # The required field customization
        if not email:
            raise ValueError("Email is required")

        if not first_name:
            raise ValueError("First name is required")

        if not last_name:
            raise ValueError("First name is required")

        """
        Creates and saves a superuser with the given email, first_name, last_name and password.
        """
        email = self.normalize_email(email)
        user = self.create_user(
            email,
            last_name=last_name,
            first_name=first_name,
            password=password,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    GENDER = (
        ('male', 'male'),
        ('female', 'female'),
    )

    email = models.EmailField(
        verbose_name="email address",
        max_length=255,
        unique=True,
    )
    username = models.CharField(
        max_length=45, unique=True, null=True, blank=True,)
    first_name = models.CharField(max_length=155)
    last_name = models.CharField(max_length=155)

    date_of_birth = models.DateField(null=True)
    profile_picture = models.ImageField(
        upload_to='profile/', null=True, blank=True, default="")
    phone_number = models.CharField(
        max_length=20, null=True, blank=True, default="")
    gender = models.CharField(max_length=10, null=True, choices=GENDER)
    # date_joined = models.DateTimeField(auto_now_add=True)
    # last_login = models.DateTimeField(auto_now=True)

    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name"]

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin
