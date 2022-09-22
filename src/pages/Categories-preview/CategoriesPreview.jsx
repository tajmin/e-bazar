import React from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/Category-preview/CategoryPreview";
import Spinner from "../../components/Spinner/Spinner";
import {
  selectCategories,
  selectCategoryIsLoading,
} from "../../store/categories/categories.selector";
import "./CategoriesPreview.styles.scss";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectCategoryIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
};

export default CategoriesPreview;
