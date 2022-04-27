from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from personnel.models import Personnel
from personnel.serializers import personnelSerializer
#user
from urllib import response
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .serializers import UserSerializer
from .models import User
import jwt, datetime
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from threading import Timer
from django.contrib.auth.hashers import make_password

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
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('User not found!')

        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect password!')

        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
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

class update_log(APIView):
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

