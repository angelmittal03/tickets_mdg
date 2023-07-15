from django.contrib import admin
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('<int:id>/',views.UserMoviesView.as_view()),
    path('',views.UserMoviesView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)