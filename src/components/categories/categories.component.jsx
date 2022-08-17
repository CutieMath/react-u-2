import React from "react";
import { categories } from "../../utils/dummy";
import "./categories.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Categories;
