from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password

User = get_user_model()

class ResgisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, validators=[validate_password])

    class Meta:
        model = User
        fields = ("id","username","email","course","password")

    def create(self, validated_data):
        user = User(
            username=validated_data["username"],
            email=validated_data["email"],
            course=validated_data["course"],
        )
        user.set_password(validated_data["password"])
        user.save()
        return user