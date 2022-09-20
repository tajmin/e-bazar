import { CART_ACTION_TYPES } from "./cart.actiontypes";

export const CART_INITIAL_STATE = {
  isCartDropdownOpen: false,
  cartProducts: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartProducts: payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartDropdownOpen: payload,
      };
    default:
      return state;
  }
};
