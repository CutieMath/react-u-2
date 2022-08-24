import React, { useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.components";
import { CategoriesContext } from "../../context/categories.context";
import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title, index) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={index} title={title} product={products} />;
      })}
      <div className="products-container"></div>
    </div>
  );
};

export default Shop;
