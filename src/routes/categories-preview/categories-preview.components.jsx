import React, { useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.components";
import { CategoriesContext } from "../../context/categories.context";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const { categoriesMap, loading } = useContext(CategoriesContext);
  return (
    <>
      {loading && <Spinner />}
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
