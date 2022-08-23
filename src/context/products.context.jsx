import { React, useState, createContext, useEffect } from "react";
import { SHOP_DATA } from "../utils/dummy";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    console.log("doing it");
    addCollectionAndDocuments("categories", SHOP_DATA);
  }, []);
  const value = { productsData };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
