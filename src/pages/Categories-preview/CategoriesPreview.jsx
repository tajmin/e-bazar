import React, { useContext } from "react";
import CategoryPreview from "../../components/Category-preview/CategoryPreview";
import { CategoriesContext } from "../../contexts/categories.context";
import "./CategoriesPreview.styles.scss";

const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <div className="categories-preview-wrapper">
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
