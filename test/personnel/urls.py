from django.conf.urls import url 
from personnel import views


urlpatterns=[
    url (r'^personnel/$',views.personnel),
    url (r'^personnel/([0-9]+)$',views.personnel),
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

   

]