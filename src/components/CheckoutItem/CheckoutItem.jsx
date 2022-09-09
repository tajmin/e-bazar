import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import DeleteIcon from "../Delete-icon/DeleteIcon";
import MinusIcon from "../Minus-icon/MinusIcon";
import PlusIcon from "../Plus-icon/PlusIcon";
import {
  CheckoutItemContainer,
  Image,
  ImageContainer,
  OperatorContainer,
  QuantityContainer,
  RemoveIconContainer,
} from "./CheckoutItem.styles";

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
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageContainer>

      <span className="name">{name}</span>

      <QuantityContainer>
        <OperatorContainer onClick={handleDecrement}>
          <MinusIcon></MinusIcon>
        </OperatorContainer>
        <span>{quantity}</span>
        <OperatorContainer onClick={handleIncrement}>
          <PlusIcon></PlusIcon>
        </OperatorContainer>
      </QuantityContainer>

      <span className="price">${price}</span>

      <RemoveIconContainer onClick={handleRemoveItem}>
        <DeleteIcon></DeleteIcon>
      </RemoveIconContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
