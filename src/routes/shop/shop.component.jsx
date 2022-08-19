import React from "react";
import { shopData } from "../../utils/dummy";

const Shop = () => {
  return (
    <div>
      {shopData.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
