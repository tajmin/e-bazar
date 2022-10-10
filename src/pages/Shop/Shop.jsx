import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../Categories-preview/CategoriesPreview";
import Category from "../Category/Category";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":categoryTitle" element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
