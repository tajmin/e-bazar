import { createAction } from "../../Utility/Reducer/reducer.utility";
import { CART_ACTION_TYPES } from "./cart.actiontypes";

const manageAddCartItems = (cartProducts, product) => {
  const existingProduct = cartProducts.find((item) => item.id === product.id);
  if (existingProduct) {
    return cartProducts.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartProducts, { ...product, quantity: 1 }];
};

const manageDecreaseCartItems = (cartProducts, product) => {
  const existingProduct = cartProducts.find((item) => item.id === product.id);
  if (existingProduct.quantity === 1) {
    return cartProducts.filter((item) => item.id !== product.id);
  }
  return cartProducts.map((item) =>
    item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};

const manageRemoveCartItem = (cartProducts, product) => {
  return cartProducts.filter((item) => item.id !== product.id);
};

export const setCartDropdownOpen = (isCartOpen) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen);

export const addProductToCart = (cartProducts, product) => {
  const newCartProducts = manageAddCartItems(cartProducts, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartProducts);
};

export const decreaseProductQuantityFromCart = (cartProducts, product) => {
  const newCartProducts = manageDecreaseCartItems(cartProducts, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartProducts);
};

export const removeProductFromCart = (cartProducts, product) => {
  const newCartProducts = manageRemoveCartItem(cartProducts, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartProducts);
};
