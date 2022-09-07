import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../Utility/Firebase/Firebase.js";

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  const value = { categories };

  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await getCategoriesAndDocuments();
      setCategories(categoryList);
    };
    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
