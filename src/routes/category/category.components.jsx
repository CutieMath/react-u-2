import React, { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../context/categories.context";
import { useParams } from "react-router-dom";
import "./category.styles.scss";
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap, loading } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title-category-page">{category}</h2>
      {loading && <Spinner />}
      <div className="category-container">
        {products && // Safe guard for data returned from async function
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
