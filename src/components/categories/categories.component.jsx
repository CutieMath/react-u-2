import React from "react";
import { categories } from "../../utils/dummy";
import DirectoryItem from "../category-item/directory-item.component";
import "./categories.styles.scss";

const Categories = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Categories;
