from rest_framework import generics

from .models import Artwork 
from .serializers import ArtworkSerializer

class ArtworkListView(generics.ListAPIView):
    queryset = Artwork.objects.select_related('owner').all()
    serializer_class = ArtworkSerializer

class ArtworkDetailView(generics.RetrieveAPIView):
    queryset = Artwork.objects.select_related('owner').all()
    serializer_class = ArtworkSerializer
