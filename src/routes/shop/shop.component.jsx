import React, { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../context/products.context";
import "./shop.styles.scss";

const Shop = () => {
  const { productsData } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {productsData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
