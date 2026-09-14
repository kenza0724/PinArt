from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from .models import Gallery


User = get_user_model()


class GalleryApiTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='test-user',
            email='test@example.com',
            password='test-password',
        )
        self.gallery = Gallery.objects.create(
            owner=self.user,
            name='Initial Gallery',
            description='Initial description',
        )

    def test_list_galleries(self):
        response = self.client.get(reverse('gallery-list-create'))

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['name'], 'Initial Gallery')

    def test_create_gallery(self):
        response = self.client.post(
            reverse('gallery-list-create'),
            {
                'owner': self.user.id,
                'name': 'New Gallery',
                'description': 'Created in a test',
            },
            format='json',
        )

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Gallery.objects.count(), 2)

    def test_update_gallery(self):
        response = self.client.patch(
            reverse('gallery-detail', args=[self.gallery.id]),
            {'name': 'Renamed Gallery'},
            format='json',
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.gallery.refresh_from_db()
        self.assertEqual(self.gallery.name, 'Renamed Gallery')

    def test_delete_gallery(self):
        response = self.client.delete(
            reverse('gallery-detail', args=[self.gallery.id]),
        )

        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(
            Gallery.objects.filter(id=self.gallery.id).exists()
        )