from categorys.testscat.test_setUp import TestSetUp
from categorys.models import ParentProductCategory


class TestProductModel(TestSetUp):

    def test_parent_category_model(self):
        """Test Product model insertion, types, attributes, functions
        """
        data = self.parentCat

        # testing instance of created data
        self.assertTrue(isinstance(data, ParentProductCategory))
        # testing __str__ function
        self.assertEquals(str(data), "test parent cats")
