from django.urls import path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()

urlpatterns = [
  path('finances', views.FinancesView.as_view()),
  *router.urls
]
