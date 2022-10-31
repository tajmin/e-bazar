import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../Button/Button";
import "./ProductCard.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addProductToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addProductToCart(product);
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <h4>{name}</h4>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted" onClick={handleAddToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
