from products.serializers import ProductSerializer
from categorys.models import ProductCategory, ParentProductCategory
from products.models import Product
from django.test import TestCase


class TestProductSerializer(TestCase):

    def setUp(self):
        self.parentCat = ParentProductCategory.objects.create(
            name="test parent cat")

        self.prodCat = ProductCategory.objects.create(
            name="test_cat_now", parent=self.parentCat)

        self.prod = Product.objects.create(
            name="test name", category=self.prodCat, price=40)

    def test_product_serializer_is_working(self):
        serializer = ProductSerializer(Product.objects.all(), many=True)
        self.assertTrue(serializer.data)
