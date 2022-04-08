from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from personnel.models import Personnel
from personnel.serializers import personnelSerializer

# Create your views here.



@csrf_exempt
def personnel(request):
    if request.method=='GET':
        personnels = Personnel.objects.all()
        personnel_Serializer = personnelSerializer(personnels,many=True)
        return JsonResponse(personnel_Serializer.data, safe=False)
    elif request.method=='POST':
        personnel_data = JSONParser().parse(request)
        personnel_Serializer = personnelSerializer(data = personnel_data)
        
        if personnel_Serializer.is_valid():
            personnel_Serializer.save()
            return JsonResponse('added successfully !!!',safe=False)
        return JsonResponse('Failed to Add.' ,safe=False) 
    
    elif request.method=='PUT':
        personnel_data = JSONParser().parse(request)
        personnel = Personnel.objects.get(cin=personnel_data['cin'])
        personnel_Serializer = personnelSerializer(personnel,data=personnel_data)
        if personnel_Serializer.is_valid():
            personnel_Serializer.save()
            return JsonResponse('Updated Successfully !!' , safe=False)
        return JsonResponse('Failed to update.' , safe=False)
    
    elif request.method=='DELETE':
        personnel= Personnel.objects.get(cin=id)
        personnel.delete()
        return JsonResponse('Deleted Successfully!!' , safe=False)