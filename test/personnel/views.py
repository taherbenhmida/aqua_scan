from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from django.db.models import Sum
from datetime import date
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
#user
from urllib import response
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .serializers import PresenceSerializer, UserSerializer, misssion_stageSerializer, punitionSerializer
from .models import Mission_Stage, Presence, User, diplome, punition, rendement
import jwt, datetime
import json
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from threading import Timer
from django.db.models import Q
from django.contrib.auth.hashers import make_password
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

#fish farming /////////////////////
import matplotlib
matplotlib.use('agg')  # Use the 'agg' backend
import matplotlib.pyplot as plt
  
from django.http import HttpResponse
import io
#fish farming /////////////////////

 
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
            return JsonResponse('لقد تمت الإضافة بنجاح',safe=False)
        return JsonResponse('الرجاء إعادة المحاولة' ,safe=False) 
    
    elif request.method=='PUT':
        personnel_data = JSONParser().parse(request)
        personnel = Personnel.objects.get(cin=personnel_data['cin'])
        personnel_Serializer = personnelSerializer(personnel,data=personnel_data)
        if personnel_Serializer.is_valid():
            personnel_Serializer.save()
            return JsonResponse('لقد تم التحيين بنجاح .' , safe=False)
        return JsonResponse('الرجاء إعادة المحاولة .' , safe=False)
    
    elif request.method=='DELETE':
        personnel_data = JSONParser().parse(request)
        personnel= Personnel.objects.get(cin=personnel_data['cin'])
        personnel.delete()
        return JsonResponse('لقد تمت إضافة الموظف للأرشيف .' , safe=False)

#user view 

class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class PasswordVerification(APIView):
    def post(self,request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()
        response = Response()

        if user is None:
            response.data = {
            'status': 'false'
            }
            return response

        if not user.check_password(password):
            response.data = {
            'status': 'false'
            }
            return response
        response.data = {
            'status': 'true'
        }
        print('verification done !')
        return response

class UpdatePassword(APIView):
    def put(self,request):
        email=request.data['email']
        password=request.data['newpass']
        print('the new pass :',request.data['newpass'])
        newpassword=make_password(password)
        User.objects.filter(email=email).update(password=newpassword)   
        return Response("Updated Successfully")




class LoginView(APIView):
    def post(self, request):
        name = request.data['name']
        password = request.data['password']

        user = User.objects.filter(name=name).first()

        if user is None:
            raise AuthenticationFailed('User not found!')

        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect password!')

        payload = {
            'id': user.id,
            
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256').decode('utf-8')

        response = Response()

        response.set_cookie(key='jwt', value=token, httponly=True)
        
        response.data = {
            'jwt': token
        }
        print (response.data.get('jwt'))
        return response


class UserView(APIView):

    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated!')

        try:
            payload = jwt.decode(token, 'secret', algorithm=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = User.objects.filter(id=payload['id']).first()
        serializer = UserSerializer(user)
        return Response(serializer.data)

class tranche_age(APIView):
    def get(self,request):
        tranche_num1=Personnel.objects.filter(date_naissance__range=['1992-01-01','2002-12-31']).count()
        tranche_num2=Personnel.objects.filter(date_naissance__range=['1981-01-01','1991-12-31']).count()
        tranche_num3=Personnel.objects.filter(date_naissance__lte='1980-12-31').count()
        response = Response()
        response.data = {
            'tranche1': tranche_num1,
            'tranche2': tranche_num2,
            'tranche3': tranche_num3
        }
        return response

class Par_service(APIView):
    def get(self,request):
        s1=Personnel.objects.filter(service='جراحة القلب و الشرايين').count()
        s2=Personnel.objects.filter(service='المسالك البولية').count()
        s3=Personnel.objects.filter(service='جراحة العيون').count()
        s4=Personnel.objects.filter(service='الأذنين و الأنف و الحنجرة').count()
        s5=Personnel.objects.filter(service='الأمراض الجلدية').count()
        s6=Personnel.objects.filter(service='التصوير بالأشعة').count()
        s7=Personnel.objects.filter(service='الأمراض الجرثومية').count()
        s8=Personnel.objects.filter(service='الجراحة الباطنية').count()
        s9=Personnel.objects.filter(service='الأمراض الصدرية').count()
        response = Response()
        response.data = {
            's1':s1,
            's2':s2,
            's3':s3,
            's4':s4,
            's5':s5,
            's6':s6,
            's7':s7,
            's8':s8,
            's9':s9
        }
        return response
class Par_grade(APIView):
    def get(self,request):
        g1=Personnel.objects.filter(grade='جندي أول').count()
        g2=Personnel.objects.filter(grade=' رقيب').count()
        g3=Personnel.objects.filter(grade=' رقيب أول').count()
        g4=Personnel.objects.filter(grade='عريف').count()
        g5=Personnel.objects.filter(grade='عريف أول').count()
        g6=Personnel.objects.filter(grade='وكيل').count()
        g7=Personnel.objects.filter(grade='وكيل أول').count()
        g8=Personnel.objects.filter(grade='وكيل أعلى').count()
        g9=Personnel.objects.filter(grade='ملازم').count()
        g10=Personnel.objects.filter(grade='ملازم أول').count()
        g11=Personnel.objects.filter(grade='نقيب').count()
        g12=Personnel.objects.filter(grade='رائد').count()
        g13=Personnel.objects.filter(grade='مقدم').count()
        g14=Personnel.objects.filter(grade='عقيد').count()
        g15=Personnel.objects.filter(grade='عميد').count()
        g16=Personnel.objects.filter(grade='أمير لواء').count()
        g17=Personnel.objects.filter(grade='فريق').count()
        g18=Personnel.objects.filter(grade='فريق أول').count()
        response = Response()
        response.data = {
            'g1':g1,
            'g2':g2,
            'g3':g3,
            'g4':g4,
            'g5':g5,
            'g6':g6,
            'g7':g7,
            'g8':g8,
            'g9':g9,
            'g10':g10,
            'g11':g11,
            'g12':g12,
            'g13':g13,
            'g14':g14,
            'g15':g15,
            'g16':g16,
            'g17':g17,
            'g18':g18,
        }
        return response
class Par_annee(APIView):
    def get(self,request):
        ae1=Personnel.objects.filter(date_entr_hopi__range=['2012-01-01','2012-12-31']).count()
        ae2=Personnel.objects.filter(date_entr_hopi__range=['2013-01-01','2013-12-31']).count()
        ae3=Personnel.objects.filter(date_entr_hopi__range=['2014-01-01','2014-12-31']).count()
        ae4=Personnel.objects.filter(date_entr_hopi__range=['2015-01-01','2015-12-31']).count()
        ae5=Personnel.objects.filter(date_entr_hopi__range=['2016-01-01','2016-12-31']).count()
        ae6=Personnel.objects.filter(date_entr_hopi__range=['2017-01-01','2017-12-31']).count()
        ae7=Personnel.objects.filter(date_entr_hopi__range=['2018-01-01','2018-12-31']).count()
        ae8=Personnel.objects.filter(date_entr_hopi__range=['2019-01-01','2019-12-31']).count()
        ae9=Personnel.objects.filter(date_entr_hopi__range=['2020-01-01','2020-12-31']).count()
        ae10=Personnel.objects.filter(date_entr_hopi__range=['2021-01-01','2021-12-31']).count()

        as1=Archive.objects.filter(date_entree_archive__range=['2012-01-01','2012-12-31']).count()
        as2=Archive.objects.filter(date_entree_archive__range=['2013-01-01','2013-12-31']).count()
        as3=Archive.objects.filter(date_entree_archive__range=['2014-01-01','2014-12-31']).count()
        as4=Archive.objects.filter(date_entree_archive__range=['2015-01-01','2015-12-31']).count()
        as5=Archive.objects.filter(date_entree_archive__range=['2016-01-01','2016-12-31']).count()
        as6=Archive.objects.filter(date_entree_archive__range=['2017-01-01','2017-12-31']).count()
        as7=Archive.objects.filter(date_entree_archive__range=['2018-01-01','2018-12-31']).count()
        as8=Archive.objects.filter(date_entree_archive__range=['2019-01-01','2019-12-31']).count()
        as9=Archive.objects.filter(date_entree_archive__range=['2020-01-01','2020-12-31']).count()
        as10=Archive.objects.filter(date_entree_archive__range=['2021-01-01','2021-12-31']).count()
        response = Response()
        response.data = {
            'ae1':ae1,'as1':as1,
            'ae2':ae2,'as2':as2,
            'ae3':ae3,'as3':as3,
            'ae4':ae4,'as4':as4,
            'ae5':ae5,'as5':as5,
            'ae6':ae6,'as6':as6,
            'ae7':ae7,'as7':as7,
            'ae8':ae8,'as8':as8,
            'ae9':ae9,'as9':as9,
            'ae10':ae10,'as10':as10,
        }
        return response


class list_of_usersAPI(APIView):
    def get(self,request):
        users = User.objects.all()
        users_serializer=UserSerializer(users,many=True)
        return Response(users_serializer.data)

class singleuser(APIView):
    def get(self,request,pk):
        user=User.objects.get(id=pk)
        user_serializer=UserSerializer(user,many=False)
        return Response(user_serializer.data)
        
class delete_user(APIView):
    def delete(self,request,pk):
        user=User.objects.get(id=pk)
        user.delete()
        return JsonResponse("Deleted Successfully",safe=False)

class delete_service(APIView):
    def delete(self,request,pk):
        service=Service.objects.get(code_service=pk)
        service.delete()
        return JsonResponse("Deleted Successfully",safe=False)

class delete_arme(APIView):
    def delete(self,request,pk):
        arme=Arme.objects.get(code_arme=pk)
        arme.delete()
        return JsonResponse("Deleted Successfully",safe=False)

class delete_grade(APIView):
    def delete(self,request,pk):
        grade=Grade.objects.get(code_grade=pk)
        grade.delete()
        return JsonResponse("Deleted Successfully",safe=False)

class add_grade(APIView):
    def post(self, request):
        serializer = gradeSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class add_service(APIView):
    def post(self, request):
        serializer = serviceSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class add_arme(APIView):
    def post(self, request):
        serializer = armeSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class update_log(APIView):
    def put(self,request,pk):
        user_data=JSONParser().parse(request)
        user=User.objects.get(id=pk)
        user_serializer=UserSerializer(user,data=user_data)
            
        if user_serializer.is_valid():
            user_serializer.save()
            return Response("Updated Successfully")
        return Response("Failed to Update")

class update_img(APIView):
    def put(self,request,pk):
        user_data=JSONParser().parse(request)
        user=User.objects.get(id=pk)
        user_serializer=UserSerializer(user,data=user_data)
            
        if user_serializer.is_valid():
            user_serializer.save()
            return Response("Updated Successfully")
        return Response("Failed to Update")
        
class update_user(APIView):
    
    def put(self,request,pk):
        user_data=JSONParser().parse(request)
        user=User.objects.get(id=pk)
        print(user_data)
        user_serializer=UserSerializer(user,data=user_data)
            
        if user_serializer.is_valid():
            user_serializer.save()
            return Response("Updated Successfully")
        return Response("Failed to Update")
            
class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }
        return response

class post_Presence(APIView):
    def post(self,request):
        serializer = PresenceSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class get_Presence(APIView):
     def get(self,request):
        presences=Presence.objects.all()
        Presence_Serializer=PresenceSerializer(presences,many=True)
        return Response(Presence_Serializer.data)

class post_mission(APIView):
    def post(self,request):
        serializer = misssion_stageSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class get_mission(APIView):
    def get(self,request,pk):
        mission=Mission_Stage.objects.filter(cin=pk)
        mission_serializer=misssion_stageSerializer(mission,many=True)
        return Response(mission_serializer.data)

class post_punition(APIView):
    def post(self,request):
        serializer = punitionSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class get_punition(APIView):
    def get(self,request,pk):
        punitions=punition.objects.filter(cin=pk)
        punition_serializer=punitionSerializer(punitions,many=True)
        return Response(punition_serializer.data)

class absence(APIView):
    def get(self,request,pk,annee,semestre):
        if semestre==1:
            absence=Presence.objects.filter(cin=pk).filter(~Q(situation='حاضر')).filter(date__range=[str(annee)+'-01-01',str(annee)+'-06-30']).count()
            response = Response()
            presence=180-absence
            response.data = {
                'absence':absence,
                'presence':presence
            }
            return response
        if semestre==2:
            absence=Presence.objects.filter(cin=pk).filter(~Q(situation='حاضر')).filter(date__range=[str(annee)+'-07-01',str(annee)+'-12-31']).count()
            response = Response()
            presence=180-absence
            response.data = {
                'absence':absence,
                'presence':presence
            }
            return response 
##################    model
import joblib
import numpy as np

model=joblib.load('RD.sav')
def pred (model,civil,exp,niv,miss,dip,inter,exter,conv,mat,absc,rend,annu,arr,cart,tawbi,grade):
    m=np.array([civil,exp,niv,miss,dip,inter,exter,conv,mat,absc,rend,annu,arr,cart,tawbi,grade]).reshape(1,16)
    print('le patient est dans la classe',model.predict(m))
    print(model.predict_proba(m))
    return model.predict(m)

pred(model,1,5,2,0,1,1,2,10,0,0,18,100,0,0,0,4)

 
class get_models_parameters(APIView):
    def get(self,request,pk):
        arr=punition.objects.filter(cin=pk).filter(type_punition='سجن').aggregate(Sum('nbre_jour'))
        print(list(arr.values())[0])
        a=list(arr.values())[0]
        tawbi=punition.objects.filter(cin=pk).filter(type_punition='إنذار').count()
        cart=punition.objects.filter(cin=pk).filter(type_punition='توبيخ').count()

        miss=Mission_Stage.objects.filter(cin=pk).filter(type_mission='مهمة').count()
        inter=Mission_Stage.objects.filter(cin=pk).filter(type_mission='تربص داخلي').count()
        exter=Mission_Stage.objects.filter(cin=pk).filter(type_mission='تربص خارجي').count()

        absc=Presence.objects.filter(cin=pk).filter(situation='غياب غير شرعي').count()

        grade=Personnel.objects.filter(cin=pk).values('grade')


        print(grade[0]['grade'])
        if grade[0]['grade']=='جندي أول':
            g=12
        if grade[0]['grade']==' رقيب':
            g=1
        if grade[0]['grade']==' رقيب أول':
            g=2
        if grade[0]['grade']=='عريف':
            g=12
        if grade[0]['grade']=='عريف أول':
            g=12
        if grade[0]['grade']=='وكيل':
            g=9
        if grade[0]['grade']=='وكيل أول':
            g=11
        if grade[0]['grade']=='وكيل أعلى':
            g=10
        if grade[0]['grade']=='ملازم':
            g=6
        if grade[0]['grade']=='ملازم أول':
            g=7
        if grade[0]['grade']=='نقيب':
            g=8
        if grade[0]['grade']=='رائد':
            g=0
        if grade[0]['grade']=='مقدم':
            g=5
        if grade[0]['grade']=='عقيد':
            g=3
        if grade[0]['grade']=='عميد':
            g=4
        if grade[0]['grade']=='أمير لواء':
            g=12
        if grade[0]['grade']=='فريق':
            g=12
        if grade[0]['grade']=='فريق أول':
            g=12
        print(g)

        mat=Presence.objects.filter(cin=pk,situation='عطلة أمومة').count()
        conv=Presence.objects.filter(cin=pk,situation='نقاهة').count()
        dip=diplome.objects.filter(cin=pk).count()
        niv=Personnel.objects.filter(cin=pk).values('niv_intel')

        if niv[0]['niv_intel']=='bac 11':
            n=0
        elif niv[0]['niv_intel']=='bac 13':
            n=1
        elif niv[0]['niv_intel']=='bac 7':
            n=5
        elif niv[0]['niv_intel']=='bac 6':
            n=4
        elif niv[0]['niv_intel']=='bac 5':
            n=3
        elif niv[0]['niv_intel']=='bac 3':
            n=2
        elif niv[0]['niv_intel']=='bac 8':
            n=6
        elif niv[0]['niv_intel']=='bac -':
            n=7
        else :
            n=404

        civil=Personnel.objects.filter(cin=pk).values('etatcivil')
        if civil[0]['etatcivil']=='أعزب':
            c=0
        else :
            c=1

        date_entr_hopi=Personnel.objects.filter(cin=pk).values('date_entr_hopi')
        date_entr=date_entr_hopi[0]['date_entr_hopi']
        date_debut=date_entr.year
        print(date_debut)
        current_year = date.today().year
        print(current_year)
        
        exp=current_year-date_debut
        print(exp)

        nbr_annu=rendement.objects.filter(cin=pk,note_annuelle__isnull=False).count()
        sum_annu=rendement.objects.filter(cin=pk).aggregate(Sum('note_annuelle'))
        s=list(sum_annu.values())[0]
        moy_annu=s/nbr_annu
        print(moy_annu)

        nbr_rend=rendement.objects.filter(cin=pk,note_semestrielle__isnull=False).count()
        sum_rend=rendement.objects.filter(cin=pk).aggregate(Sum('note_semestrielle'))
        s=list(sum_rend.values())[0]
        moy_rend=s/nbr_rend
        print(moy_rend)
        response = Response()
        response.data = {
            'arr':a,
            'tawbi':tawbi,
            'cart':cart,
            'miss':miss,
            'inter':inter,
            'exter':exter,
            'absc':absc,
            'grade':g,
            'mat':mat,
            'conv':conv,
            'dip':dip,
            'niv':n,
            'civil':c,
            'exp':exp,
            'annu':moy_annu,
            'rend':moy_rend
        }
        return response

class prediction(APIView):
    def post(self,request):
        model_data=JSONParser().parse(request)
        
        print(model_data)
        c=pred(model,model_data['civil'],model_data['exp'],model_data['niv'],model_data['miss'],model_data['dip'],model_data['inter'],model_data['exter'],model_data['conv'],model_data['mat'],model_data['absc'],model_data['rend'],model_data['annu'],model_data['arr'],model_data['cart'],model_data['tawbi'],model_data['grade'])
        response = Response()
        response.data = {
            'class':c
        }
        return response

@csrf_exempt
def onePersonnel(request,cin):
    if request.method=='GET':
       
        personnel= Personnel.objects.get(cin=cin)
        personnel_Serializer = personnelSerializer(personnel)
        return JsonResponse(personnel_Serializer.data)
        
@csrf_exempt
def getPersonnelByService(request,serv):
    if request.method=='GET':
        print('test serv',serv)
        personnels= Personnel.objects.all().filter(service=serv)
        personnel_Serializer = personnelSerializer(personnels,many=True)
        return JsonResponse(personnel_Serializer.data, safe=False)

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
        return JsonResponse('لقد تم إسترجاع الموظف من الأرشيف .' , safe=False)

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

# fish farming  //////////////////////////////////
def seabream_weight_gain(BW, Temp):
    """
    Calculate daily weight gain for seabream.

    Parameters:
    BW (float): Body weight in grams
    Temp (float): Temperature in degree Celsius

    Returns:
    float: Weight gain in grams per day
    """
    return 0.024 * BW**0.514 * np.exp(0.060 * Temp)

def seabream_growth(initial_weight, temperatures, days):
    """
    Calculate the weight of seabream over a period using daily weight gain.

    Parameters:
    initial_weight (float): Initial weight in grams
    temperatures (array): Array of daily temperatures in degree Celsius
    days (int): Number of days

    Returns:
    array: Weight of seabream at each time point
    """
    weights = np.zeros(days)
    weights[0] = initial_weight

    for day in range(1, days):
        weight_gain = seabream_weight_gain(weights[day-1], temperatures[day-1])
        weights[day] = weights[day-1] + weight_gain

    return weights

def adjust_temperatures_for_targets(initial_weight, target_weight_4_months, target_weight_450_days, days):
    temperatures = np.random.uniform(19, 27, days)
    temp_increment = 0.01  # Small increment for adjusting temperatures

    while True:
        weights = seabream_growth(initial_weight, temperatures, days)
        weight_4_months = weights[120-1]
        weight_450_days = weights[450-1]

        if abs(weight_4_months - target_weight_4_months) < 0.1 and abs(weight_450_days - target_weight_450_days) < 1:
            break

        # Adjust temperatures based on difference from target weights
        if weight_4_months < target_weight_4_months:
            temperatures[:120] += temp_increment
        else:
            temperatures[:120] -= temp_increment
        if weight_450_days < target_weight_450_days:
            temperatures[120:450] += temp_increment
        else:
            temperatures[120:450] -= temp_increment


    return temperatures, weights

def generate_seabream_plot(request):
    initial_weight = 0.01  # Initial weight in grams
    days = 450

    # Target weights
    target_weight_4_months = 3  # Weight at 4 months (120 days)
    target_weight_450_days = 380  # Weight at 450 days

    # Find the appropriate temperature values
    temperatures, weights = adjust_temperatures_for_targets(initial_weight, target_weight_4_months, target_weight_450_days, days)

    # Plot the results
    plt.figure(figsize=(10, 5))

    plt.subplot(2, 1, 1)
    plt.plot(range(days), temperatures, label='Daily Temperature')
    plt.xlabel('Time (days)')
    plt.ylabel('Temperature (°C)')
    plt.title('Daily Temperature Curve')
    plt.legend()

    plt.subplot(2, 1, 2)
    plt.plot(range(days), weights, label='Seabream Weight')
    plt.axhline(y=target_weight_4_months, color='g', linestyle='--', label='Target Weight (3g at 4 months)')
    plt.axhline(y=target_weight_450_days, color='r', linestyle='--', label='Target Weight (380g at 450 days)')
    plt.xlabel('Time (days)')
    plt.ylabel('Weight (g)')
    plt.title('Seabream Weight Growth Curve')
    plt.legend()

    plt.tight_layout()

    # Save the plot to a BytesIO buffer
    buf = io.BytesIO()
    plt.savefig(buf, format='png')
    plt.close()

    buf.seek(0)

    # Return the image as an HTTP response
    return HttpResponse(buf, content_type='image/png')


from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Tank, Room, FishTransfer, Department
from .serializers import TankSerializer, RoomSerializer, FishTransferSerializer
from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework import viewsets


@api_view(['GET'])
def tanks_by_room(request):
    print("API called")

    rooms = Room.objects.all()
    data = []

    for room in rooms:
        tanks = Tank.objects.filter(room=room)
        room_data = {
            'room': RoomSerializer(room).data,
            'tanks': TankSerializer(tanks, many=True).data
        }
        print("room data :",room_data)
        data.append(room_data)

    return Response(data)

@csrf_exempt
@api_view(['POST'])
def transferFish(request):
    try:
        data = json.loads(request.body)
        tank_from_id = data.get('tankFromId')
        tank_to_id = data.get('tankToId')
        number_of_fish = data.get('numberOfFish')
        average_weight = data.get('averageWeight')  # New attribute for the average weight of the fish being transferred

        # Validate input data
        if not tank_from_id or not tank_to_id or not number_of_fish or number_of_fish <= 0 or not average_weight or average_weight <= 0:
            return JsonResponse({'error': 'Invalid input data'}, status=400)

        # Fetch the source and destination tanks from the database
        tank_from = get_object_or_404(Tank, id=tank_from_id)
        tank_to = get_object_or_404(Tank, id=tank_to_id)

        # Check if the source tank has enough fish
        if tank_from.number_of_fish < number_of_fish:
            return JsonResponse({'error': 'Not enough fish in the source tank'}, status=400)

        # Check if the tanks have the same type
        if tank_from.type != tank_to.type:
            return JsonResponse({'error': 'Tanks must be of the same type'}, status=400)

        # Calculate the biomass of the fish being transferred
        transfer_biomass = number_of_fish * average_weight

        # Update the source tank
        tank_from.number_of_fish -= number_of_fish
        tank_from.biomass -= transfer_biomass
        if tank_from.number_of_fish > 0:
            tank_from.average_weight = tank_from.biomass / tank_from.number_of_fish
        else:
            tank_from.average_weight = 0

        # Update the destination tank
        tank_to.number_of_fish += number_of_fish
        tank_to.biomass += transfer_biomass
        tank_to.average_weight = tank_to.biomass / tank_to.number_of_fish

        # Save both tanks
        tank_from.save()
        tank_to.save()
        
        # Save the transfer record
        FishTransfer.objects.create(
            tank_from=tank_from,
            tank_to=tank_to,
            number_of_fish=number_of_fish,
            average_weight=average_weight
        )

        return JsonResponse({'message': 'Fish transferred successfully'}, status=200)

    except Tank.DoesNotExist:
        return JsonResponse({'error': 'Tank not found'}, status=404)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

def get_tank_details(request, tank_id):
    try:
        tank = get_object_or_404(Tank, id=tank_id)
        serializer = TankSerializer(tank)
        return JsonResponse(serializer.data, status=200)
    except Tank.DoesNotExist:
        return JsonResponse({'error': 'Tank not found'}, status=404)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

@api_view(['GET'])
def get_transfers(request):
    transfers = FishTransfer.objects.all()
    serializer = FishTransferSerializer(transfers, many=True)
    return Response(serializer.data)

from django.db.models import Sum  # Import Sum here

def get_nursery_statistics(request):
    num_rooms = Room.objects.count()
    num_tanks = Tank.objects.count()
    num_fish = Tank.objects.aggregate(total_fish=Sum('number_of_fish'))['total_fish'] or 0
    
    data = {
        'num_rooms': num_rooms,
        'num_tanks': num_tanks,
        'num_fish': num_fish
    }  
    return JsonResponse(data)

@api_view(['GET'])
def get_tanks_fish(request):
    tanks = Tank.objects.all()
    serializer = TankSerializer(tanks, many=True)

    seabass_count = tanks.filter(type='seabass').aggregate(total_fish=Sum('number_of_fish'))['total_fish'] or 0
    seabream_count = tanks.filter(type='seabream').aggregate(total_fish=Sum('number_of_fish'))['total_fish'] or 0

    seabass_percentage = (seabass_count / (seabass_count+seabream_count))*100
    seabream_percentage = seabream_count / ((seabass_count+seabream_count))*100

    data = {
        'tanks': serializer.data,
        'seabass_count': seabass_count,
        'seabream_count': seabream_count,
        'seabass_percentage': seabass_percentage,
        'seabream_percentage': seabream_percentage 
    }

    return Response(data, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_rooms(request):
    rooms = Room.objects.all()
    serializer = RoomSerializer(rooms, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_tank(request):
    try:
        data = request.data
        print('Received Data for adding tank :', data)  # Log the received data

        room_id = data.get('room')
        if not room_id:
            return Response({'error': 'Room ID is required'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            room = Room.objects.get(id=room_id)
        except Room.DoesNotExist:
            return Response({'error': 'Room not found'}, status=status.HTTP_404_NOT_FOUND)

        tank = Tank.objects.create(
            name=data['name'],
            type=data['type'],
            consommation=data.get('consommation', 0),
            capacity=data['capacity'],
            number_of_fish=data['number_of_fish'],
            biomass=data['biomass'],
            average_weight=data['average_weight'],
            room=room
        )
        serializer = TankSerializer(tank)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    except Exception as e:
        print('Error:', str(e))  # Log the error
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

class TankDeleteView(generics.DestroyAPIView):
    queryset = Tank.objects.all()
    serializer_class = TankSerializer

    def delete(self, request, *args, **kwargs):
        try:
            tank = self.get_object()
            tank.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Tank.DoesNotExist:
            return Response({'error': 'Tank not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def add_room(request):
    if request.method == 'POST':
        data = request.data.copy()
        try:
            department = Department.objects.get(id=1)
        except Department.DoesNotExist:
            return Response({'error': 'Department does not exist'}, status=status.HTTP_400_BAD_REQUEST)
        
        data['department'] = department.id
        serializer = RoomSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_room(request, id):
    try:
        room = Room.objects.get(id=id)
        room.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except Room.DoesNotExist:
        return Response({'error': 'Room not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def rooms_details(request):
    # Fetch all rooms and their related tanks
    rooms = Room.objects.prefetch_related('tanks').all()
    
    data = []
    for room in rooms:
        tanks = room.tanks.all()
        tank_details = [
            {
                'name': tank.name,
                'type': tank.type,
                'capacity': tank.capacity,
                'number_of_fish': tank.number_of_fish
            }
            for tank in tanks
        ]
        data.append({
            'name': room.name,
            'consommation': room.consommation,
            'tanks': tank_details
        })
    
    return Response(data)