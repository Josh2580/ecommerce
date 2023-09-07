from rest_framework.test import APITestCase
from categorys.models import ProductCategory, ParentProductCategory
from products.models import Product, ProductSize, ProductColor, ProductQuality


class TestSetUp(APITestCase):

    def setUp(self):
        self.parentCat = ParentProductCategory.objects.create(
            name="test parent cat")

        self.prodCat = ProductCategory.objects.create(
            name="test_cat", parent=self.parentCat)

        self.prod = Product.objects.create(
            title="test name", category=self.prodCat, price=20)

        product = Product.objects.filter(title="test name")

        self.prodcolor = ProductColor.objects.create(
            color="test product color")

        for proc in product:
            self.prodcolor.products.add(proc)  # OR USE .set WITHOUT LOOP

        self.prodsize = ProductSize.objects.create(
            size="test product size")

        self.prodsize.products.set(product)  # OR USE .add WITH LOOP

        self.prodquality = ProductQuality.objects.create(
            quality="test product quality")

        self.prodquality.products.set(product)

        self.all_product_url = "all_products"
