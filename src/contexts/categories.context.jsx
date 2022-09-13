import { useReducer } from "react";
import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../Utility/Firebase/Firebase.js";

export const CategoriesContext = createContext({
  categories: {},
});

const INITIAL_STATE = {
  categories: {},
};

const categoriesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: payload,
      };
    default:
      throw new Error(`${type} unhandled exception in categoriesReducer`);
  }
};

export const CategoriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(categoriesReducer, INITIAL_STATE);
  const { categories } = state;
  const setCategories = (categoryList) => {
    dispatch({ type: "SET_CATEGORIES", payload: categoryList });
  };
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
