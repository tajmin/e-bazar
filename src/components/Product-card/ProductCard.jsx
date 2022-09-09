import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../Button/Button";
import {
  ProductCardContainer,
  ProductInfoContainer,
} from "./ProductCard.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addProductToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addProductToCart(product);
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />

      <ProductInfoContainer>
        <h4 className="name">{name}</h4>
        <span className="price">${price}</span>
      </ProductInfoContainer>

      <Button buttonType="inverted" onClick={handleAddToCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
