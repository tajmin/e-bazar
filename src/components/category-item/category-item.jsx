import React from "react";
import { CategoryContainer } from "./category-item.styles";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <CategoryContainer>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </CategoryContainer>
  );
};

export default CategoryItem;
