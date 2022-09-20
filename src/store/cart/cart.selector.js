import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartProducts = createSelector(
  [selectCartReducer],
  (cart) => cart.cartProducts
);

export const selectIsCartDropdownOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartDropdownOpen
);

export const selectCartCount = createSelector(
  [selectCartProducts],
  (cartProducts) =>
    cartProducts.reduce((total, item) => total + item.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartProducts],
  (cartProducts) =>
    cartProducts.reduce((total, item) => total + item.quantity * item.price, 0)
);
