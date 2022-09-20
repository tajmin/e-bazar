import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../store/cart/cart.action";
import { selectCartProducts } from "../../store/cart/cart.selector";
import Button from "../Button/Button";
import "./ProductCard.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartProducts = useSelector(selectCartProducts);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addProductToCart(cartProducts, product));
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <h4 className="name">{name}</h4>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted" onClick={handleAddToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
