import React from "react";
import ProductCard from "../Product-card/ProductCard";
import {
  CategoryPreviewContainer,
  HyperLink,
  LinkContainer,
  PreviewContainer,
  TitleText,
} from "./CategoryPreview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <TitleText>{title.toUpperCase()}</TitleText>

      <PreviewContainer>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </PreviewContainer>

      <LinkContainer>
        <HyperLink to={title}>More {title.toUpperCase()}</HyperLink>
      </LinkContainer>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
