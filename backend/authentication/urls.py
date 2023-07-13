from django.contrib import admin
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('<int:id>/',views.UserAuthenticationView.as_view()),
    path('<str:Email>/',views.UserAuthenticationsView.as_view()),
    path('',views.UserAuthenticationView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)