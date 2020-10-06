from .serializers import Contact_UsSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import get_object_or_404
from contact.models import Contact_Us
from rest_framework import viewsets,generics,status


class Constac_us_ApiView(viewsets.ModelViewSet):
    queryset=Contact_Us.objects.all()
    serializer_class=Contact_UsSerializer
    x=queryset
    def get(self,request):
        if self.queryset:
            return self.queryset
        else:
            return Response("not contact")

    def perform_create(self,serializer):
        serializer.save()
     