from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response

from App_main.models import *
from App_main.serializers import *


class PatientProfileViewSet(viewsets.ModelViewSet):
    queryset = PatientProfile.objects.all()
    serializer_class = PatientProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, **kwargs):
        serializer = self.serializer_class(data=request.data, context={"request": request})
        serializer.is_valid(raise_exception=True)
        patient_profile = serializer.save()
        return Response({"status": "Successfully Created"}, status=201)

    def retrieve(self, request, pk, **kwargs):
        patient_profile = PatientProfile.objects.get(pk=pk)
        serializer = self.serializer_class(patient_profile)
        return Response(serializer.data)

    def update(self, request, pk, **kwargs):
        patient_profile = PatientProfile.objects.get(pk=pk)
        serializer = self.serializer_class(patient_profile, data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        patient_profile = serializer.save()
        return Response({"status": "Successfully Updated!"})

    def destroy(self, request, pk, **kwargs):
        patient_profile = PatientProfile.objects.get(pk=pk)
        patient_profile.delete()
        return Response(status=204)

    def patch(self, request, pk, **kwargs):
        patient_profile = PatientProfile.objects.get(pk=pk)
        serializer = self.serializer_class(patient_profile, data=request.data, partial=True,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        patient_profile = serializer.save()
        return Response({"status": "Successfully Updated!"})


class ServiceModelListCreateView(generics.ListCreateAPIView):
    queryset = ServiceModel.objects.all()
    serializer_class = ServiceModelSerializer


class ServiceModelRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ServiceModel.objects.all()
    serializer_class = ServiceModelSerializer


class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, **kwargs):
        serializer = self.serializer_class(data=request.data, context={"request": request})
        serializer.is_valid(raise_exception=True)
        appointment = serializer.save()
        return Response({"status": "Successfully Created"}, status=201)

    def retrieve(self, request, pk, **kwargs):
        appointment = Appointment.objects.get(pk=pk)
        serializer = self.serializer_class(appointment)
        return Response(serializer.data)

    def update(self, request, pk, **kwargs):
        appointment = Appointment.objects.get(pk=pk)
        serializer = self.serializer_class(appointment, data=request.data)
        serializer.is_valid(raise_exception=True)
        appointment = serializer.save()
        return Response(appointment.data)

    def destroy(self, request, pk, **kwargs):
        appointment = Appointment.objects.get(pk=pk)
        appointment.delete()
        return Response(status=204)


class MedicalSampleViewSet(viewsets.ModelViewSet):
    queryset = MedicalSample.objects.all()
    serializer_class = MedicalSampleSerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, **kwargs):
        serializer = self.serializer_class(data=request.data, context={"request": request})
        serializer.is_valid(raise_exception=True)
        medical_sample = serializer.save()
        return Response({"status": "Successfully Created"}, status=201)

    def retrieve(self, request, pk, **kwargs):
        medical_sample = MedicalSample.objects.get(pk=pk)
        serializer = self.serializer_class(medical_sample)
        return Response(serializer.data)

    def update(self, request, pk, **kwargs):
        medical_sample = MedicalSample.objects.get(pk=pk)
        serializer = self.serializer_class(medical_sample, data=request.data)
        serializer.is_valid(raise_exception=True)
        medical_sample = serializer.save()
        return Response(medical_sample.data)

    def destroy(self, request, pk, **kwargs):
        medical_sample = MedicalSample.objects.get(pk=pk)
        medical_sample.delete()
        return Response(status=204)


class TestResultViewSet(viewsets.ModelViewSet):
    queryset = TestResult.objects.all()
    serializer_class = TestResultSerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, **kwargs):
        serializer = self.serializer_class(data=request.data, context={"request": request})
        serializer.is_valid(raise_exception=True)
        test_result = serializer.save()
        return Response({"status": "Successfully Created"}, status=201)

    def retrieve(self, request, pk, **kwargs):
        test_result = TestResult.objects.get(pk=pk)
        serializer = self.serializer_class(test_result)
        return Response(serializer.data)
