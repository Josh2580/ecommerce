from django.urls import reverse, resolve
from rest_framework import status
from products.models import Product
from products.tests.test_setUp import TestSetUp


# class AccountTests(APITestCase, URLPatternsTestCase):
class AccountTests(TestSetUp):
    def test_get_all_products(self):
        """
        Ensure we get all the products with the url.
        """
        url = reverse('product_nows-list')
        # print(resolve(url))

        response = self.client.get(url, format='json')
        # self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(status.is_success(response.status_code))

    def test_retrieve_a_product(self):
        """
        Ensure we get all the products with the url.
        """
        a = []
        for i in Product.objects.all():
            a += str(i.pk)
        url = reverse('product_nows-detail', args=(a))
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_update_a_product(self):
        """
        Ensure we get all the products with the url.
        """
        a = []
        for i in Product.objects.all():
            a += str(i.pk)

        data = {"name": "updated_test_name"}
        url = reverse('product_nows-detail', args=(a))
        response = self.client.patch(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Product.objects.get().name, 'updated_test_name')

    def test_delete_a_product(self):
        """
        Ensure we are able to delete a product.
        """

        url = reverse('product_nows-detail', args=("1"))
        response = self.client.delete(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
