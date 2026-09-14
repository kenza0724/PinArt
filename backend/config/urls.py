
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/artworks/', include('artworks.urls')),
    path('api/galleries/', include('galleries.urls')),
]
