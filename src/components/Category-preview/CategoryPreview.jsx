import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Product-card/ProductCard";
import "./CategoryPreview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </div>
      <div>
        <Link to="/">More {title.toUpperCase()}</Link>
      </div>
    </div>
  );
};

export default CategoryPreview;
