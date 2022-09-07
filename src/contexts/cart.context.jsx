import { createContext, useEffect, useState } from "react";

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

export const CartProvider = ({ children }) => {
  const [isCartDropdownOpen, setCartDropdownOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartProductCount, setCartProductCount] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  const addProductToCart = (product) => {
    setCartProducts(manageAddCartItems(cartProducts, product));
  };

  const decreaseProductQuantityFromCart = (product) => {
    setCartProducts(manageDecreaseCartItems(cartProducts, product));
  };

  const removeProductFromCart = (product) => {
    setCartProducts(manageRemoveCartItem(cartProducts, product));
  };

  useEffect(() => {
    const newCount = cartProducts.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartProductCount(newCount);
  }, [cartProducts]);

  useEffect(() => {
    const newTotal = cartProducts.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setCartTotalPrice(newTotal);
  }, [cartProducts]);

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
