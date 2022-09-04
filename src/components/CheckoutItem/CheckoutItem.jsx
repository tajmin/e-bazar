import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import DeleteIcon from "../Delete-icon/DeleteIcon";
import MinusIcon from "../Minus-icon/MinusIcon";
import PlusIcon from "../Plus-icon/PlusIcon";
import "./CheckoutItem.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const {
    removeProductFromCart,
    addProductToCart,
    decreaseProductQuantityFromCart,
  } = useContext(CartContext);

  const handleRemoveItem = () => removeProductFromCart(cartItem);
  const handleIncrement = () => addProductToCart(cartItem);
  const handleDecrement = () => decreaseProductQuantityFromCart(cartItem);

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
