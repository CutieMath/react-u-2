import React, { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../context/products.context";

const Shop = () => {
  const { productsData } = useContext(ProductsContext);
  return (
    <div>
      {productsData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
