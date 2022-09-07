import React, { useContext } from "react";
import CategoryPreview from "../../components/Category-preview/CategoryPreview";
import { CategoriesContext } from "../../contexts/categories.context";

const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <div className="">
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={products}
          ></CategoryPreview>
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
