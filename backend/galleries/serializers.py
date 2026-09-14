from rest_framework import serializers

from .models import Gallery

class GallerySerializer(serializers.ModelSerializer):
    owner_username = serializers.CharField(
        source='owner.username',
        read_only=True
    )

    class Meta:
        model = Gallery
        fields = [
            'id',
            'owner',
            'owner_username',
            'name',
            'description',
            'created_at',
            'updated_at',
        ]
        read_only_fields = [
            'id',
            'owner_username',
            'created_at',
            'updated_at',
        ]
