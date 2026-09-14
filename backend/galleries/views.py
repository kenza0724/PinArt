from rest_framework import generics

from .models import Gallery
from .serializers import GallerySerializer


class GalleryListCreateView(generics.ListCreateAPIView):
    queryset = Gallery.objects.select_related('owner').all()
    serializer_class = GallerySerializer


class GalleryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Gallery.objects.select_related('owner').all()
    serializer_class = GallerySerializer