import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchCategoriesAsync } from "../../store/categories/categories.action";
import CategoriesPreview from "../Categories-preview/CategoriesPreview";
import Category from "../Category/Category";
import "./Shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();

  /* 
   The dispatch from redux is created only once and this never 
   updates, it remains the same. The useEffect hook throws a 
   warning if the dispatch isn't put as a dependency which is 
   a contradiction as React doesn't know that dispatch doesn't
  change over time but still throws warning.
  */

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":categoryTitle" element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
