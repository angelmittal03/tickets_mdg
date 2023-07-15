from authentication.models import Authentication
from rest_framework import serializers


class AuthenticationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Authentication
        fields="__all__"