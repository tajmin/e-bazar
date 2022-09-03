import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartDropdownOpen: false,
  setCartDropdownOpen: () => {},
  cartProducts: [],
  addProductToCart: () => {},
  cartProductCount: 0,
});

const manageCartItems = (cartProducts, product) => {
  const isExistingProduct = cartProducts.find((item) => item.id === product.id);
  if (isExistingProduct) {
    return cartProducts.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartProducts, { ...product, quantity: 1 }];
};

export const CartProvider = ({ children }) => {
  const [isCartDropdownOpen, setCartDropdownOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartProductCount, setCartProductCount] = useState(0);

  const addProductToCart = (product) => {
    setCartProducts(manageCartItems(cartProducts, product));
  };

  useEffect(() => {
    const newCount = cartProducts.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartProductCount(newCount);
  }, [cartProducts]);

  const value = {
    isCartDropdownOpen,
    setCartDropdownOpen,
    addProductToCart,
    cartProducts,
    cartProductCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
