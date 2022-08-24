import React, { useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.components";
import { CategoriesContext } from "../../context/categories.context";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
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
