import { React, useState, createContext, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import { gql, useQuery } from "@apollo/client";

export const CategoriesContext = createContext({
  categoriesMap: [],
});

const COLLECTIONS_QUERY = gql`
  query GetCollections {
    collections {
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

export const CategoriesProvider = ({ children }) => {
  const { loading, error, data } = useQuery(COLLECTIONS_QUERY);
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    if (data) {
      const { collections } = data;
      const collectionsMap = collections.reduce((accumulator, collection) => {
        const { title, items } = collection;
        accumulator[title.toLowerCase()] = items;
        console.log(accumulator);
        return accumulator;
      }, {});
      setCategoriesMap(collectionsMap);
    }
  }, [data]);

  // Replace the following code with Apollo client
  // We are now having a better way to fetch data from the server
  // useEffect(() => {
  //   const getCategoryProducts = async () => {
  //     const categoryMap = await getCategoriesAndDocuments();
  //     setCategoriesMap(categoryMap);
  //   };
  //   getCategoryProducts();
  // }, []);

  const value = { categoriesMap, loading };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
