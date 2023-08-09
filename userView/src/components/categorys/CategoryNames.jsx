import { useEffect, useState } from "react";
import { useGetCategoryNamesQuery } from "../../source/api/CategoryApi";

export const CategoryNames = (categoryId) => {
  const { data, error, isLoading, isSuccess } = useGetCategoryNamesQuery();
  const [categoryName, setCategoryName] = useState("Product Category Name");
  useEffect(() => {
    if (isSuccess) {
      // Filter the Specific Category by its ID(which is the category_id)
      let myCatDisplay = data.filter((cat) => cat.id == categoryId);
      // Mapping the filtered Category to get its name
      myCatDisplay.map((finalCat) => setCategoryName(finalCat.name));
    }
    // This useEffect functions always run when the data or categoryName is updated
  }, [data, categoryName]);

  return categoryName;
};
