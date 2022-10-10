import React, { useContext } from "react";
import CategoryPreview from "../../components/Category-preview/CategoryPreview";
import { CategoriesContext } from "../../contexts/categories.context";
import { Container } from "../../Global.styles";

const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <Container>
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
    </Container>
  );
};

export default CategoriesPreview;
