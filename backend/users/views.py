from rest_framework import generics, viewsets
from django.contrib.auth import get_user_model
from .serializers import ResgisterSerializer, UserSerializer
from .models import User

# Create your views here.

User = get_user_model()

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = ResgisterSerializer