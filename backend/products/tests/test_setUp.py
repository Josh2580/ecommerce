from rest_framework.test import APITestCase
from categorys.models import ProductCategory, ParentProductCategory
from products.models import Product



class TestSetUp(APITestCase):

    def setUp(self):
        self.parentCat = ParentProductCategory.objects.create(
            name="test parent cat")

        self.prodCat = ProductCategory.objects.create(
            name="test_cat", parent=self.parentCat)

        self.prod = Product.objects.create(
            name="test name", category=self.prodCat, price=20)