import { React, useState, createContext } from "react";
import { shopData } from "../utils/dummy";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [productsData, setProductsData] = useState(shopData);
  const value = { productsData };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
