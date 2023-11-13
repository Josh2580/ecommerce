from rest_framework import viewsets
from rest_framework.decorators import action
from order.models import OrderItems, Order
from order.serializers import OrderSerializer, CreateOrderSerializer, OrderItemsSerializer
import requests
# from urllib import response
from rest_framework.response import Response
import uuid
from django.conf import settings
####
####
import io
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer

# Create your views here.


def initiate_payment(amount, email, order_id):
    url = "https://api.flutterwave.com/v3/payments"
    headers = {
        "Authorization": settings.FLW_SEC_KEY
    }
    # header = {
    #     "Authorization": "Bearer token"
    # }
    data = {
        "tx_ref": str(uuid.uuid4()),
        "amount": str(amount),
        "currency": "NGN",
        "redirect_url": "http://127.0.0.1:8000/api/orders/all/3/pay/confirm_payment/?o_id=" + order_id,
        "meta": {
            "consumer_id": 23,
            "consumer_mac": "92a3-912ba-1192a"
        },
        "customer": {
            "email": email,
            "phonenumber": "080****4528",
            "name": "Yemi Desola"
        },
        "customizations": {
            "title": "Pied Piper Payments",
            "logo": "http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png"
        }
    }

    # try:
    #     response = requests.post(url, headers=headers, json=data)
    #     response_data = response.json()
    #     return Response(response_data)
    # except requests.exceptions.RequestException as err:
    #     print("The Payment did not go through")
    #     return Response({"error": str(err)}, status=500)

    # stream = io.BytesIO(content)
    # data = JSONParser().parse(stream)

    try:
        response = requests.post(url, headers=headers, json=data)
        # response = requests.post(url)

        response_data = JSONRenderer().render(response)
        return Response(response_data)
    except requests.exceptions.RequestException as err:
        return Response({"error": str(err)}, status=500)


class OrderViewSet(viewsets.ModelViewSet):
    # queryset = Order.objects.all()
    # serializer_class = OrderSerializer

    @action(detail=True, methods=['POST'])
    def pay(self, request, pk):
        order = self.get_object()
        amount = order.total_price
        order_id = str(order.id)
        email = request.user.email
        # redirect_url = "http://127.0.0.1:8000/confirm"

        return initiate_payment(amount, email, order_id)
        # return Response(initiate_payment(amount, email, order_id))

    @action(detail=False, methods=['POST'])
    def confirm_payment(self, request):
        order_id = request.GET.get("o_id")
        order = Order.objects.get(id=order_id)
        order.order_status = "C"
        order.save()
        serializer = OrderSerializer(order)

        data = {
            "msg": "Payment is successful",
            "data": serializer.data
        }

        return Response(data)

    def get_serializer_class(self):
        if self.request.method == "POST":
            return CreateOrderSerializer
        return OrderSerializer

    def get_queryset(self):
        user = self.request.user
        if user.is_staff:
            return Order.objects.all()
        return Order.objects.filter(customer_id=user.pk)

    def get_serializer_context(self):
        return {"user_id": self.request.user.id}


class OrderItemsViewSet(viewsets.ModelViewSet):
    queryset = OrderItems.objects.all()
    serializer_class = OrderItemsSerializer
    # lookup_field = 'order'
