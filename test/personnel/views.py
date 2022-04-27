from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from personnel.models import Personnel
from personnel.models import Archive
from personnel.models import Grade
from personnel.models import Arme
from personnel.models import Bureau
from personnel.models import Service
from personnel.models import Fonction
from personnel.models import Qualification_mil
from personnel.models import Region
from personnel.models import Situation
from personnel.models import Specialite
from personnel.serializers import personnelSerializer
from personnel.serializers import archiveSerializer
from personnel.serializers import gradeSerializer
from personnel.serializers import fonctionSerializer
from personnel.serializers import bureauSerializer
from personnel.serializers import serviceSerializer
from personnel.serializers import specialiteSerializer
from personnel.serializers import situationSerializer
from personnel.serializers import regionSerializer
from personnel.serializers import armeSerializer
from personnel.serializers import qualification_milSerializer


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
        personnel_data = JSONParser().parse(request)
        personnel= Personnel.objects.get(cin=personnel_data['cin'])
        personnel.delete()
        return JsonResponse('Deleted Successfully!!' , safe=False)

@csrf_exempt
def onePersonnel(request,cin):
    if request.method=='GET':
       
        personnel= Personnel.objects.get(cin=cin)
        personnel_Serializer = personnelSerializer(personnel)
        return JsonResponse(personnel_Serializer.data)


@csrf_exempt
def grade(request):
    if request.method=='GET':
        grades = Grade.objects.all()
        grade_Serializer = gradeSerializer(grades,many=True)
        return JsonResponse(grade_Serializer.data, safe=False)
    elif request.method=='POST':
        grade_data = JSONParser().parse(request)
        grade_Serializer = gradeSerializer(data = grade_data)
        
        if grade_Serializer.is_valid():
            grade_Serializer.save()
            return JsonResponse('added successfully !!!',safe=False)
        return JsonResponse('Failed to Add.' ,safe=False) 
    
    elif request.method=='PUT':
        grade_data = JSONParser().parse(request)
        grade = Grade.objects.get(code_grade=grade_data['code_grade'])
        grade_Serializer = gradeSerializer(grade,data=grade_data)
        if grade_Serializer.is_valid():
            grade_Serializer.save()
            return JsonResponse('Updated Successfully !!' , safe=False)
        return JsonResponse('Failed to update.' , safe=False)
    
    elif request.method=='DELETE':
        grade_data = JSONParser().parse(request)
        grade= Grade.objects.get(code_grade=grade_data['code_grade'])
        grade.delete()
        return JsonResponse('Deleted Successfully!!' , safe=False)

     

@csrf_exempt
def archive(request):
    if request.method=='GET':
        archives = Archive.objects.all()
        archive_Serializer = archiveSerializer(archives,many=True)
        return JsonResponse(archive_Serializer.data, safe=False)
    elif request.method=='POST':
        archive_data = JSONParser().parse(request)
        archive_Serializer = archiveSerializer(data = archive_data)
        
        if archive_Serializer.is_valid():
            archive_Serializer.save()
            return JsonResponse('added successfully !!!',safe=False)
        return JsonResponse('Failed to Add.' ,safe=False) 
    
    elif request.method=='PUT':
        archive_data = JSONParser().parse(request)
        archive = Archive.objects.get(cin=archive_data['cin'])
        archive_Serializer = archiveSerializer(archive,data=archive_data)
        if archive_Serializer.is_valid():
            archive_Serializer.save()
            return JsonResponse('Updated Successfully !!' , safe=False)
        return JsonResponse('Failed to update.' , safe=False)
    
    elif request.method=='DELETE':
        archive_data = JSONParser().parse(request)
        archive= Archive.objects.get(cin=archive_data['cin'])
        archive.delete()
        return JsonResponse('Deleted Successfully!!' , safe=False)


@csrf_exempt
def arme(request):
    if request.method=='GET':
        armes = Arme.objects.all()
        arme_Serializer = armeSerializer(armes,many=True)
        return JsonResponse(arme_Serializer.data, safe=False)
    elif request.method=='POST':
        arme_data = JSONParser().parse(request)
        arme_Serializer = armeSerializer(data = arme_data)
        
        if arme_Serializer.is_valid():
            arme_Serializer.save()
            return JsonResponse('added successfully !!!',safe=False)
        return JsonResponse('Failed to Add.' ,safe=False) 
    
    elif request.method=='PUT':
        arme_data = JSONParser().parse(request)
        arme = Arme.objects.get(code_arme=arme_data['code_arme'])
        arme_Serializer = armeSerializer(arme,data=arme_data)
        if arme_Serializer.is_valid():
            arme_Serializer.save()
            return JsonResponse('Updated Successfully !!' , safe=False)
        return JsonResponse('Failed to update.' , safe=False)
    
    elif request.method=='DELETE':
        arme_data = JSONParser().parse(request)
        arme= Arme.objects.get(code_arme=arme_data['code_arme'])
        arme.delete() 
        return JsonResponse('Deleted Successfully!!' , safe=False)



@csrf_exempt
def bureau(request):
    if request.method=='GET':
        bureaux = Bureau.objects.all()
        bureau_Serializer = bureauSerializer(bureaux,many=True)
        return JsonResponse(bureau_Serializer.data, safe=False)
    elif request.method=='POST':
        bureau_data = JSONParser().parse(request)
        bureau_Serializer = bureauSerializer(data = bureau_data)
        
        if bureau_Serializer.is_valid():
            bureau_Serializer.save()
            return JsonResponse('added successfully !!!',safe=False)
        return JsonResponse('Failed to Add.' ,safe=False) 
    
    elif request.method=='PUT':
        bureau_data = JSONParser().parse(request)
        bureau = Bureau.objects.get(code_bureau=bureau_data['code_bureau'])
        bureau_Serializer = bureauSerializer(bureau,data=bureau_data)
        if bureau_Serializer.is_valid():
            bureau_Serializer.save()
            return JsonResponse('Updated Successfully !!' , safe=False)
        return JsonResponse('Failed to update.' , safe=False)
    
    elif request.method=='DELETE':
        bureau_data = JSONParser().parse(request)
        bureau= Bureau.objects.get(code_bureau=bureau_data['code_bureau'])
        bureau.delete() 
        return JsonResponse('Deleted Successfully!!' , safe=False)



@csrf_exempt
def service(request):
    if request.method=='GET':
        services = Service.objects.all()
        service_Serializer = serviceSerializer(services,many=True)
        return JsonResponse(service_Serializer.data, safe=False)
    elif request.method=='POST':
        service_data = JSONParser().parse(request)
        service_Serializer = serviceSerializer(data = service_data)
        
        if service_Serializer.is_valid():
            service_Serializer.save()
            return JsonResponse('added successfully !!!',safe=False)
        return JsonResponse('Failed to Add.' ,safe=False) 
    
    elif request.method=='PUT':
        service_data = JSONParser().parse(request)
        service = Service.objects.get(code_service=service_data['code_service'])
        service_Serializer = serviceSerializer(service,data=service_data)
        if service_Serializer.is_valid():
            service_Serializer.save()
            return JsonResponse('Updated Successfully !!' , safe=False)
        return JsonResponse('Failed to update.' , safe=False)
    
    elif request.method=='DELETE':
        service_data = JSONParser().parse(request)
        service= Service.objects.get(code_service=service_data['code_service'])
        service.delete() 
        return JsonResponse('Deleted Successfully!!' , safe=False)



@csrf_exempt
def specialite(request):
    if request.method=='GET':
        specialites = Specialite.objects.all()
        specialite_Serializer = specialiteSerializer(specialites,many=True)
        return JsonResponse(specialite_Serializer.data, safe=False)
    elif request.method=='POST':
        specialite_data = JSONParser().parse(request)
        specialite_Serializer = specialiteSerializer(data = specialite_data)
        
        if specialite_Serializer.is_valid():
            specialite_Serializer.save()
            return JsonResponse('added successfully !!!',safe=False)
        return JsonResponse('Failed to Add.' ,safe=False) 

    elif request.method=='PUT':
        specialite_data = JSONParser().parse(request)
        specialite = Specialite.objects.get(code_specialite=specialite_data['code_specialite'])
        specialite_Serializer = specialiteSerializer(specialite,data=specialite_data)
        if specialite_Serializer.is_valid():
            specialite_Serializer.save()
            return JsonResponse('Updated Successfully !!' , safe=False)
        return JsonResponse('Failed to update.' , safe=False)
    
    elif request.method=='DELETE':
        specialite_data = JSONParser().parse(request)
        specialite= Specialite.objects.get(code_specialite=specialite_data['code_specialite'])
        specialite.delete() 
        return JsonResponse('Deleted Successfully!!' , safe=False)



@csrf_exempt
def situation(request):
    if request.method=='GET':
        situations = Situation.objects.all()
        situation_Serializer = situationSerializer(situations,many=True)
        return JsonResponse(situation_Serializer.data, safe=False)
    elif request.method=='POST':
        situation_data = JSONParser().parse(request)
        situation_Serializer = situationSerializer(data = situation_data)
        
        if situation_Serializer.is_valid():
            situation_Serializer.save()
            return JsonResponse('added successfully !!!',safe=False)
        return JsonResponse('Failed to Add.' ,safe=False) 
    
    elif request.method=='PUT':
        situation_data = JSONParser().parse(request)
        situation = Situation.objects.get(code_situation=situation_data['code_situation'])
        situation_Serializer = situationSerializer(situation,data=situation_data)
        if situation_Serializer.is_valid():
            situation_Serializer.save()
            return JsonResponse('Updated Successfully !!' , safe=False)
        return JsonResponse('Failed to update.' , safe=False)
    
    elif request.method=='DELETE':
        situation_data = JSONParser().parse(request)
        situation= Situation.objects.get(code_situation=situation_data['code_situation'])
        situation.delete() 
        return JsonResponse('Deleted Successfully!!' , safe=False)



@csrf_exempt
def region(request):
    if request.method=='GET':
        regions = Region.objects.all()
        region_Serializer = regionSerializer(regions,many=True)
        return JsonResponse(region_Serializer.data, safe=False)
    elif request.method=='POST':
        region_data = JSONParser().parse(request)
        region_Serializer = regionSerializer(data = region_data)
        
        if region_Serializer.is_valid():
            region_Serializer.save()
            return JsonResponse('added successfully !!!',safe=False)
        return JsonResponse('Failed to Add.' ,safe=False) 
    
    elif request.method=='PUT':
        region_data = JSONParser().parse(request)
        region = Region.objects.get(code_region=region_data['code_region'])
        region_Serializer = regionSerializer(region,data=region_data)
        if region_Serializer.is_valid():
            region_Serializer.save()
            return JsonResponse('Updated Successfully !!' , safe=False)
        return JsonResponse('Failed to update.' , safe=False)
    
    elif request.method=='DELETE':
        region_data = JSONParser().parse(request)
        region= Region.objects.get(code_region=region_data['code_region'])
        region.delete() 
        return JsonResponse('Deleted Successfully!!' , safe=False)



@csrf_exempt
def qualification_mil(request):
    if request.method=='GET':
        qualification_mils = Qualification_mil.objects.all()
        qualification_mil_Serializer = qualification_milSerializer(qualification_mils,many=True)
        return JsonResponse(qualification_mil_Serializer.data, safe=False)
    elif request.method=='POST':
        qualification_mil_data = JSONParser().parse(request)
        qualification_mil_Serializer = qualification_milSerializer(data = qualification_mil_data)
        
        if qualification_mil_Serializer.is_valid():
            qualification_mil_Serializer.save()
            return JsonResponse('added successfully !!!',safe=False)
        return JsonResponse('Failed to Add.' ,safe=False) 
    
    elif request.method=='PUT':
        qualification_mil_data = JSONParser().parse(request)
        qualification_mil = Qualification_mil.objects.get(code_qualification_mil=qualification_mil_data['code_qualification_mil'])
        qualification_mil_Serializer = qualification_milSerializer(qualification_mil,data=qualification_mil_data)
        if qualification_mil_Serializer.is_valid():
            qualification_mil_Serializer.save()
            return JsonResponse('Updated Successfully !!' , safe=False)
        return JsonResponse('Failed to update.' , safe=False)
    
    elif request.method=='DELETE':
        qualification_mil_data = JSONParser().parse(request)
        qualification_mil= Qualification_mil.objects.get(code_qualification_mil=qualification_mil_data['code_qualification_mil'])
        qualification_mil.delete() 
        return JsonResponse('Deleted Successfully!!' , safe=False)




@csrf_exempt
def fonction(request):
    if request.method=='GET':
        fonctions = Fonction.objects.all()
        fonction_Serializer = fonctionSerializer(fonctions,many=True)
        return JsonResponse(fonction_Serializer.data, safe=False)
    elif request.method=='POST':
        fonction_data = JSONParser().parse(request)
        fonction_Serializer = fonctionSerializer(data = fonction_data)
        
        if fonction_Serializer.is_valid():
            fonction_Serializer.save()
            return JsonResponse('added successfully !!!',safe=False)
        return JsonResponse('Failed to Add.' ,safe=False) 
    
    elif request.method=='PUT':
        fonction_data = JSONParser().parse(request)
        fonction = Fonction.objects.get(code_fonction=fonction_data['code_fonction'])
        fonction_Serializer = fonctionSerializer(fonction,data=fonction_data)
        if fonction_Serializer.is_valid():
            fonction_Serializer.save()
            return JsonResponse('Updated Successfully !!' , safe=False)
        return JsonResponse('Failed to update.' , safe=False)
    
    elif request.method=='DELETE':
        fonction_data = JSONParser().parse(request)
        fonction= Fonction.objects.get(code_fonction=fonction_data['code_fonction'])
        fonction.delete() 
        return JsonResponse('Deleted Successfully!!' , safe=False)

