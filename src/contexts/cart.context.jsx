import { useReducer } from "react";
import { createContext } from "react";

export const CartContext = createContext({
  isCartDropdownOpen: false,
  setCartDropdownOpen: () => {},
  cartProducts: [],
  addProductToCart: () => {},
  decreaseProductQuantityFromCart: () => {},
  removeProductFromCart: () => {},
  cartProductCount: 0,
  cartTotalPrice: 0,
});

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

const INITIAL_STATE = {
  isCartDropdownOpen: false,
  cartProducts: [],
  cartProductCount: 0,
  cartTotalPrice: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CART_TOTAL":
      return {
        ...state,
        ...payload,
      };
    case "SET_CART_DROPDOWN":
      return {
        ...state,
        isCartDropdownOpen: payload,
      };
    default:
      throw new Error(`${type} unhandled in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { isCartDropdownOpen, cartProducts, cartProductCount, cartTotalPrice } =
    state;

  const updateCartReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );

    dispatch({
      type: "SET_CART_TOTAL",
      payload: {
        cartProducts: newCartItems,
        cartProductCount: newCartCount,
        cartTotalPrice: newCartTotal,
      },
    });
  };

  const addProductToCart = (product) => {
    const newCartProducts = manageAddCartItems(cartProducts, product);
    updateCartReducer(newCartProducts);
  };

  const decreaseProductQuantityFromCart = (product) => {
    const newCartProducts = manageDecreaseCartItems(cartProducts, product);
    updateCartReducer(newCartProducts);
  };

  const removeProductFromCart = (product) => {
    const newCartProducts = manageRemoveCartItem(cartProducts, product);
    updateCartReducer(newCartProducts);
  };

  const setCartDropdownOpen = (isCartOpen) => {
    dispatch({
      type: "SET_CART_DROPDOWN",
      payload: isCartOpen,
    });
  };

  const value = {
    isCartDropdownOpen,
    setCartDropdownOpen,
    addProductToCart,
    decreaseProductQuantityFromCart,
    removeProductFromCart,
    cartProducts,
    cartProductCount,
    cartTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
