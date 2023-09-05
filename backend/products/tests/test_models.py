from products.tests.test_setUp import TestSetUp
from products.models import Product, ProductSize, ProductColor, ProductQuality


class TestProductModel(TestSetUp):

    def test_product_model(self):
        """Test Product model insertion, types, attributes, functions
        """
        data = self.prod

        # testing instance of created data
        self.assertTrue(isinstance(data, Product))
        # testing __str__ function
        self.assertEquals(str(data), "test name")
        # testing category_name function
        self.assertEquals(self.prod.category_name(), "test_cat")

    def test_product_color_model(self):
        """Test Product Color model insertion, types, attributes, functions
        """
        data = self.prodcolor

        # testing instance of created data
        self.assertTrue(isinstance(data, ProductColor))
        # testing __str__ function
        self.assertEquals(str(data), "test product color")

    def test_product_size_model(self):
        """Test Product Size model insertion, types, attributes, functions
        """
        data = self.prodsize

        # testing instance of created data
        self.assertTrue(isinstance(data, ProductSize))
        # testing __str__ function
        self.assertEquals(str(data), "test product size")

    def test_product_quality_model(self):
        """Test Product Size model insertion, types, attributes, functions
        """
        data = self.prodquality

        # testing instance of created data
        self.assertTrue(isinstance(data, ProductQuality))
        # testing __str__ function
        self.assertEquals(str(data), "test product quality")
