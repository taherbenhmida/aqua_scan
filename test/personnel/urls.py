from django.urls import re_path as url
from personnel import views
#user
from django.urls import path



from .views import Par_annee, Par_grade, Par_service, PasswordVerification, Presence, RegisterView, LoginView, UpdatePassword, UserView, LogoutView, absence, add_arme, add_grade, add_service, delete_arme, delete_grade, delete_service, get_Presence, get_mission, get_models_parameters, get_punition, list_of_usersAPI, delete_user, post_Presence, post_mission, post_punition, prediction,  singleuser, tranche_age, update_img,update_user

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

    path('delete_service/<int:pk>',delete_service.as_view()),
    path('delete_grade/<int:pk>',delete_grade.as_view()),
    path('delete_arme/<int:pk>',delete_arme.as_view()),

    path('add_service',add_service.as_view()),
    path('add_grade',add_grade.as_view()),
    path('add_arme',add_arme.as_view()),

    path('single_user/<int:pk>',singleuser.as_view()),
    path('update_user/<int:pk>',update_user.as_view()),
    path('update_log/<int:pk>',update_user.as_view()),
    path('update_img/<int:pk>',update_img.as_view()),

    path('tranche_age',tranche_age.as_view()),
    path('Par_service',Par_service.as_view()),
    path('Par_grade',Par_grade.as_view()),
    path('Par_annee',Par_annee.as_view()),

    path('post_presence',post_Presence.as_view()),
    path('get_presence',get_Presence.as_view()),
    
    path('post_mission',post_mission.as_view()),
    path('get_mission/<int:pk>',get_mission.as_view()),

    path('post_punition',post_punition.as_view()),
    path('get_punition/<int:pk>',get_punition.as_view()),

    path('get_models_parameters/<int:pk>',get_models_parameters.as_view()), 
    path('prediction',prediction.as_view()),

    path('absence/<int:pk>/<int:annee>/<int:semestre>',absence.as_view()),
    
    url (r'^archive/$',views.archive),
    url (r'^archive/([0-9]+)$',views.archive), 
    url (r'^onePersonnel/$',views.onePersonnel),
    url (r'^onePersonnel/([0-9]+)$',views.onePersonnel),
    url (r'^grade/$',views.grade),
    url (r'^grade/([0-9]+)$',views.grade),
    url (r'^specialite/$',views.specialite),
    url (r'^specialite/([0-9]+)$',views.specialite),
    url (r'^situation/$',views.situation),
    url (r'^situation/([0-9]+)$',views.situation),
    url (r'^region/$',views.region),
    url (r'^region/([0-9]+)$',views.region),
    url (r'^arme/$',views.arme),
    url (r'^arme/([0-9]+)$',views.arme),
    url (r'^service/$',views.service),
    url (r'^service/([0-9]+)$',views.service),
    url (r'^fonction/$',views.fonction),
    url (r'^fonction/([0-9]+)$',views.fonction),
    url (r'^qualification_mil/$',views.qualification_mil),
    url (r'^qualification_mil/([0-9]+)$',views.qualification_mil),
    url (r'^bureau/$',views.bureau),
    url (r'^bureau/([0-9]+)$',views.bureau),
    url (r'^getPersonnelByService/(?P<serv>.+)/$',views.getPersonnelByService),


    path('plot/', views.generate_seabream_plot, name='generate_seabream_plot'),
    path('api/tanks_by_room/', views.tanks_by_room, name='tanks_by_room'),
    path('api/transferFish/', views.transferFish, name='transferFish'),
    path('api/tank/<int:tank_id>/', views.get_tank_details, name='get_tank_details'),
    path('api/get_transfers/', views.get_transfers, name='get_transfers'),
    path('api/nursery-statistics/', views.get_nursery_statistics, name='nursery_statistics'),
    path('api/tanks-fish/', views.get_tanks_fish, name='tanks_fish'),
    path('api/get_rooms/', views.get_rooms, name='get_rooms'),
    path('api/add_tanks/', views.add_tank, name='add_tank'),
    path('tanks/<int:pk>/', views.TankDeleteView.as_view(), name='tank-delete'),
    path('api/add_room/', views.add_room, name='add_room'),
    path('delete_room/<int:id>/', views.delete_room, name='delete_room'),
    path('api/rooms_details/', views.rooms_details, name='rooms_details'),

]