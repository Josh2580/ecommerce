from django.shortcuts import render
from rest_framework import viewsets
from django.contrib.auth import get_user_model
from users.serializers import UserSerializer

# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    Additionally we also provide an extra `highlight` action.
    """
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
