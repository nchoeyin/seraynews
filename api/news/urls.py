from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('tibetan_news/', views.getTibetanNewsAPI, name="tibetan_news"),
]
