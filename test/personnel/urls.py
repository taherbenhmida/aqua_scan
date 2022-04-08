from django.conf.urls import url 
from personnel import views


urlpatterns=[
    url (r'^personnel/$',views.personnel),
   url (r'^personnel/([0-9]+)$',views.personnel)
]