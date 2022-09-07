import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/Product-card/ProductCard";
import { CategoriesContext } from "../../contexts/categories.context";
import "./Category.styles.scss";

const Category = () => {
  const { categoryTitle } = useParams();
  const { categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categories[categoryTitle]);

  useEffect(() => {
    setProducts(categories[categoryTitle]);
  }, [categoryTitle, categories]);

  return (
    <div className="category">
      <h2>{categoryTitle}</h2>
      <div className="title-border"></div>
      <div className="product-container">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
