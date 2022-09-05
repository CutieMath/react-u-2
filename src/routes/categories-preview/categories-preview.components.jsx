import React, { useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.components";
import { selectCategoriesMap } from "../../store/category/category.selector";

const CategoriesPreview = () => {
  const categoriesMap = useContext(selectCategoriesMap);

  return (
    <>
      {Object.keys(categoriesMap).map((title, index) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={index} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
