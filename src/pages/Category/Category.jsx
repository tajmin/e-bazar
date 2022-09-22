import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/Product-card/ProductCard";
import Spinner from "../../components/Spinner/Spinner";
import {
  selectCategories,
  selectCategoryIsLoading,
} from "../../store/categories/categories.selector";
import "./Category.styles.scss";

const Category = () => {
  const { categoryTitle } = useParams();
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectCategoryIsLoading);
  const [products, setProducts] = useState(categories[categoryTitle]);

  useEffect(() => {
    setProducts(categories[categoryTitle]);
  }, [categoryTitle, categories]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category">
          <h2>{categoryTitle}</h2>
          <div className="title-border"></div>
          <div className="product-container">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Category;
