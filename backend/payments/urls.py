
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('',views.UserPaymentView.as_view()),
    path('<int:transaction_id>/', views.UserPaymentsView.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)