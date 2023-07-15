from django.shortcuts import render
from movies.serializers import ItemSerializer
from movies.models import Item
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.parsers import JSONParser



class UserMoviesView(APIView):
    def get(self, request, id):
        if id!=0:
            item = Item.objects.get(id=id)
            data = ItemSerializer(item).data
            return Response(data)
        else:
            item = Item.objects.count()
            print(item)
            return Response(item)
        
    def put(self, request):
        data = JSONParser().parse(request)
        serializer= ItemSerializer(data=data)
        if(serializer.is_valid()): 
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
        
    def patch(self, request, id, format=None):
        item = Item.objects.get(id=id)
        req_serializer = ItemSerializer(item, data=request.data, partial=True)
        prev = ItemSerializer(item).data['availibility']
        if req_serializer.is_valid():
            req_serializer.validated_data['availibility']=prev+','+req_serializer.validated_data['availibility']
            req_serializer.save()
            return Response(req_serializer.data)
        return Response(req_serializer.errors, status=400)
    
    def delete(self, request, id, format=None):
        item = Item.objects.get(id=id)
        item.delete()
        return Response(status=204)
    
