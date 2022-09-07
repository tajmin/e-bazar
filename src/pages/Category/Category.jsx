import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
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
    <div className="product-container">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Category;
