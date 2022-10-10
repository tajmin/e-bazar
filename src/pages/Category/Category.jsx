import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/Product-card/ProductCard";
import { CategoriesContext } from "../../contexts/categories.context";
import { Container } from "../../Global.styles";
import {
  CategoryTitle,
  ProductContainer,
  TitleBorder,
} from "./Category.styles";

const Category = () => {
  const { categoryTitle } = useParams();
  const { categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categories[categoryTitle]);

  useEffect(() => {
    setProducts(categories[categoryTitle]);
  }, [categoryTitle, categories]);

  return (
    <Container>
      <CategoryTitle>{categoryTitle}</CategoryTitle>
      <TitleBorder></TitleBorder>

      <ProductContainer>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </ProductContainer>
    </Container>
  );
};

export default Category;
