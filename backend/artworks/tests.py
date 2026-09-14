from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from .models import Artwork

User = get_user_model()

class ArtworkApiTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='artist-user',
            email='artist@example.com',
            password='test-password'
        )
        self.artwork = Artwork.objects.create(
            owner=self.user,
            title='Test Artwork',
            description='A test artwork description',
            image_url='https://example.com/test-artwork.jpg',
        )

    def test_list_artwork(self):
        response = self.client.get(reverse('artwork-list'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['title'], 'Test Artwork')
        self.assertEqual(
            response.data[0]['owner_username'],
            'artist-user',
        )

    def test_retrive_artwork(self):
        response = self.client.get(
            reverse('artwork-detail', args=[self.artwork.id]),
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], 'Test Artwork')
        self.assertEqual(
            response.data['image_url'],
            'https://example.com/test-artwork.jpg',
        )

    def test_missing_artwork_returns_not_found(self):
        response = self.client.get(
            reverse('artwork-detail', args=[9999]),
        )

        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

