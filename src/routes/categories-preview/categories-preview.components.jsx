import React from "react";
import CategoryPreview from "../../components/category-preview/category-preview.components";
import { selectCategoriesMap } from "../../store/category/category.selector";
import { useSelector } from "react-redux";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

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
