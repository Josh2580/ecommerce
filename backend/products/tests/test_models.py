from products.tests.test_setUp import TestSetUp


class ProductModelTests(TestSetUp):

    def test_returns_category_name(self):
        """category_name returns the category name of the 
        category instance related to the product
        """

        self.assertEquals(self.prod.category_name(), "test_cat")
