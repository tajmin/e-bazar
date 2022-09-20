import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  decreaseProductQuantityFromCart,
  removeProductFromCart,
} from "../../store/cart/cart.action";
import { selectCartProducts } from "../../store/cart/cart.selector";
import DeleteIcon from "../Delete-icon/DeleteIcon";
import MinusIcon from "../Minus-icon/MinusIcon";
import PlusIcon from "../Plus-icon/PlusIcon";
import "./CheckoutItem.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCartProducts);

  const handleRemoveItem = () =>
    dispatch(removeProductFromCart(cartProducts, cartItem));
  const handleIncrement = () =>
    dispatch(addProductToCart(cartProducts, cartItem));
  const handleDecrement = () =>
    dispatch(decreaseProductQuantityFromCart(cartProducts, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow" onClick={handleDecrement}>
          <MinusIcon></MinusIcon>
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleIncrement}>
          <PlusIcon></PlusIcon>
        </div>
      </div>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={handleRemoveItem}>
        <DeleteIcon></DeleteIcon>
      </div>
    </div>
  );
};

export default CheckoutItem;
