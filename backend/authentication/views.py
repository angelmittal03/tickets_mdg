from urllib.request import Request
from authentication.models import Authentication
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404, JsonResponse
from authentication.models import Authentication
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password, check_password

from authentication.serializer import AuthenticationSerializer

class UserAuthenticationView(APIView):
    @csrf_exempt
    def get(self, request, id):
        post = Authentication.objects.get(id=id)
        print(post)
        if(post):
            data = AuthenticationSerializer(post).data
            return Response(data)
        return JsonResponse("Email not found", status=404)
    @csrf_exempt
    def put(self, request):
        data = JSONParser().parse(request)
        serializer = AuthenticationSerializer(data=data)
        
        if(serializer.is_valid()): 
            # email = serializer.validated_data['email'] 
            # if((serializer.validated_data['email']==None or Authentication.objects.filter(email=serializer.validated_data['email']).count()==0  ) and Authentication.objects.filter(email=serializer.validated_data['phone']).count()==0):
            pwd = serializer.validated_data['password']
            encryptedpassword=make_password(pwd)
            print(encryptedpassword)
            checkpassword=check_password(pwd, encryptedpassword)
            print(checkpassword)
            serializer.validated_data['password'] = encryptedpassword
            serializer.save()
            return JsonResponse(serializer.data, status=201)
            # return JsonResponse("Already registered", status=403,safe=False)
        return JsonResponse(serializer.errors, status=400)
    @csrf_exempt
    def patch(self, request, id, format=None):
        post = Authentication.objects.get(id=id)
        serializer = AuthenticationSerializer(post, data=request.data, partial=True)
        if serializer.is_valid():
            if(Authentication.objects.filter(email=serializer.validated_data['email']).count()==0 and Authentication.objects.filter(email=serializer.validated_data['phone']).count()==0):
                pwd = serializer.validated_data['password']
                encryptedpassword=make_password(pwd)
                print(encryptedpassword)
                checkpassword=check_password(pwd, encryptedpassword)
                print(checkpassword)
                serializer.validated_data['password'] = encryptedpassword
                serializer.save()
                return JsonResponse(serializer.data, status=201)
            else:
                return JsonResponse("Already registered", status=403,safe=False)
        return Response(serializer.errors, status=400)
    @csrf_exempt
    def delete(self, request, id, format=None):
        post = Authentication.objects.get(id=id)
        post.delete()
        return Response(status=204)
    
class UserAuthenticationsView(APIView):
    @csrf_exempt
    def post(self, request, Phone):
        print("hi")
        post = Authentication.objects.filter(phone=Phone)
        if(post):
            print("hi")
            data = AuthenticationSerializer(post, many=True).data
            # print(JSONParser().parse(request))
            req_body = JSONParser().parse(request)
            print("hi")
            print(req_body)
            if(check_password(req_body['password'],data[0].get('password'))):
                return JsonResponse("Successfully Authenticated", status=200, safe=False)
            return JsonResponse('Invalid Password', status=402)
        return JsonResponse("Email not found", status=404, safe=False)
    @csrf_exempt
    def delete(self, request, Phone, format=None):
        post = Authentication.objects.filter(phone=Phone)
        post.delete()
        return Response(status=204)