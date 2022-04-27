from django.conf.urls import url 
from personnel import views
#user
from django.urls import path
from .views import PasswordVerification, RegisterView, LoginView, UpdatePassword, UserView, LogoutView,list_of_usersAPI, delete_user, singleuser,update_user

urlpatterns=[
    url (r'^personnel/$',views.personnel),
    url (r'^personnel/([0-9]+)$',views.personnel),
#user
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('PasswordVerification', PasswordVerification.as_view()),
    path('UpdatePassword', UpdatePassword.as_view()),
    path('logout', LogoutView.as_view()),
    path('list_of_users',list_of_usersAPI.as_view()),
    path('delete_user/<int:pk>',delete_user.as_view()),
    path('single_user/<int:pk>',singleuser.as_view()),
    path('update_user/<int:pk>',update_user.as_view()),
    path('update_log/<int:pk>',update_user.as_view())
]