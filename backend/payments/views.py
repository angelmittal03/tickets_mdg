import random
from django.shortcuts import render
from payments.models import Payment
from payments.serializers import PaymentSerializer
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from django.http import Http404, JsonResponse
import requests
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from rest_framework.response import Response


def create_new_ref_number():
    not_unique = True
    while not_unique:
        unique_ref = random.randint(100, 9999999999)
        if not Payment.objects.filter(transaction_id=unique_ref):
            not_unique = False
    return str(unique_ref)


class UserPaymentView(APIView):
    
        
    @csrf_exempt
    def put(self, request):

        url = "https://sandbox.cashfree.com/pg/links"

        data = JSONParser().parse(request)
        print("******")
        print(data["phone"])
        print(type(data["amount"]))
        serializer = PaymentSerializer(data=data)

        if (serializer.is_valid()):
            serializer.validated_data['transaction_id'] = create_new_ref_number()

            data = serializer.validated_data
            print("********", data.get('transaction_id'), sep='\n')
            payload = {
            "customer_details": {
                "customer_phone": str(data.get("phone")),
                "customer_name": data.get("name"),
                "customer_email": data.get("email")
            },
            "link_notify": {
                "send_sms": True,
                "send_email": False
            },
            "link_meta": {"return_url": "http://localhost:3000/Success/"+data.get("transaction_id")},
            "link_id": data.get("transaction_id"),
            "link_amount": float(data.get("amount")),
            "link_currency": "INR",
            "link_purpose": "Make Payment"
            }
            headers = {
                "accept": "application/json",
                "x-client-id": settings.CASHFREE_KEY_ID,
                "x-client-secret": settings.CASHFREE_SECRET_ID,
                "x-api-version": "2022-09-01",
                "content-type": "application/json"
            }

            response = requests.post(url, json=payload, headers=headers).json()

            print("*****", response, sep="\n")
            serializer.validated_data["transaction_url"]=response["link_url"]
            print("*****", serializer.validated_data["transaction_url"], sep="\n")
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    
class UserPaymentsView(APIView):
    
    def get(self, request, transaction_id):
        item = Payment.objects.filter(transaction_id=transaction_id)
        seats = PaymentSerializer(item, many=True).data[0]
        return Response(seats)
    
    def post(self, request, transaction_id):
        item = Payment.objects.filter(transaction_id=transaction_id)
        seats = PaymentSerializer(item, many=True).data
        return Response(seats)
        

