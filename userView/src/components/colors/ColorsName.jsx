import { useEffect, useState } from "react";
import { useGetProductColorsQuery } from "../../source/api/ProductsApi";

export const ColorNames = (colorId) => {
  const { data, isSuccess } = useGetProductColorsQuery();
  const [colorName, setColorName] = useState("no color");
  useEffect(() => {
    if (isSuccess) {
      // Filter the Specific Color by its ID(which is the colorId)
      let myColorDisplay = data.filter((color) => color.id == colorId);
      // Mapping the filtered Color to get its name
      myColorDisplay.map((finalColor) => setColorName(finalColor.color));
    }
    // This useEffect functions always run when the data or colorName is updated
  }, [data, colorName]);

  return colorName;
};
