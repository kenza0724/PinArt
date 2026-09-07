from rest_framework import serializers

from .models import Artwork

class ArtworkSerializer(serializers.ModelSerializer):
    owner_username = serializers.CharField(
        source='owner.username',
        read_only=True,
    )

     class Meta:
        model = Artwork
        fields = [
            'id',
            'owner',
            'owner_username',
            'title',
            'description',
            'image_url',
            'created_at',
            'updated_at',
        ]
        read_only_fields = [
            'id',
            'owner',
            'owner_username',
            'created_at',
            'updated_at',
        ]
        