import React from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/Category-preview/CategoryPreview";
import { selectCategories } from "../../store/categories/categories.selector";
import "./CategoriesPreview.styles.scss";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories);

  return (
    <div className="categories-preview-wrapper side-padding">
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
