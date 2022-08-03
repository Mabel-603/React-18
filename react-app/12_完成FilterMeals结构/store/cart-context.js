import React from "react";

const CartContext = React.createContext({
  cartData: [],
  addItem: () => {},
  subItem: () => {},
});
export default CartContext;
