from django.urls import path,include
from .views import Constac_us_ApiView
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r"contact",Constac_us_ApiView)


urlpatterns = [
    path("",include(router.urls)),
]
