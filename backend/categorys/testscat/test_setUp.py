from rest_framework.test import APITestCase
from categorys.models import ParentProductCategory, ProductCategory


class TestSetUp(APITestCase):

    def setUp(self):
        self.parentCat = ParentProductCategory.objects.create(
            name="test parent cats")

        # self.prodCat = ProductCategory.objects.create(
        #     name="test_cat", parent=self.parentCat)
