from categorys.models import ProductCategory, ParentProductCategory
from products.models import Product
from django.test import TestCase


class ProductModelTests(TestCase):

    # def setUp(self):
    #     self.product = Product.objects.create(color="gold")

    def test_returns_category_name(self):
        """category_name returns the category name of the 
        category instance related to the product
        """
        parentCat = ParentProductCategory.objects.create(
            name="test parent cat")

        prodCat = ProductCategory.objects.create(
            name="test_cat", parent=parentCat)

        prod = Product.objects.create(
            name="test name", category=prodCat, price=20)

        self.assertEquals(prod.category_name(), "test_cat")
