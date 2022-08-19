import React, { useContext } from "react";
import { ProductsContext } from "../../context/products.context";

const Shop = () => {
  const { productsData } = useContext(ProductsContext);
  return (
    <div>
      {productsData.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
