from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class User(AbstractUser):
    course = models.CharField(max_length=100, blank=True, null=True)