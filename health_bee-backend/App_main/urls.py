from django.urls import path

from App_main.views import *

app_name = "App_main"

urlpatterns = [
    path('patient-profiles/', PatientProfileViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('patient-profiles/<int:pk>/',
         PatientProfileViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'})),
     path('profile-exists-or-not/', ProfileExistOrNot.as_view()),
    path('appointments/', AppointmentViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('appointments/<int:pk>/',
         AppointmentViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'})),
    path('medical-samples/', MedicalSampleViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('medical-samples/<int:pk>/',
         MedicalSampleViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'})),
    path('test-results/', TestResultViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('test-results/<int:pk>/',
         TestResultViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'})),
    path('service-models/', ServiceModelListCreateView.as_view(), name='service-model-list-create'),
    path('service-models/<int:pk>/', ServiceModelRetrieveUpdateDestroyView.as_view(),
         name='service-model-retrieve-update-destroy'),
]
