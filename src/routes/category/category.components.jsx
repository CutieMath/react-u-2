import React, { useState } from "react";
// import { CategoriesContext } from "../../context/categories.context";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";
import { gql, useQuery } from "@apollo/client";
import "./category.styles.scss";
import { useEffect } from "react";

const GET_CATEGORY = gql`
  query ($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const Category = () => {
  const { category } = useParams();
  const { loading, error, data } = useQuery(GET_CATEGORY, {
    variables: { title: category },
  });
  useEffect(() => {
    if (data) {
      const {
        getCollectionsByTitle: { items },
      } = data;
      setProducts(items);
    }
  }, [category, data]);
  const [products, setProducts] = useState([]);
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
