import classes from "./Cart.module.css";
import iconImg from "../../asset/bag.png";
import CartCopntext from "../../store/cart-context";
import { useContext } from "react";
const Cart = () => {
  const ctx = useContext(CartCopntext);
  return (
    <div className={classes.Cart}>
      <div className={classes.CartIcon}>
        <img src={iconImg} />
        <div className={classes.CartAmount}>{ctx.totalAmount}</div>
      </div>
      <p className={classes.CartPrice}>{ctx.totalPrice}</p>
      <button className={classes.Button}>去结算</button>
    </div>
  );
};
export default Cart;
