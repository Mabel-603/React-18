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
        {ctx.totalAmount === 0 ? null : (
          <div className={classes.CartAmount}>{ctx.totalAmount}</div>
        )}
      </div>
      {ctx.totalAmount === 0 ? (
        <p className={classes.NoMeal}>未选购商品</p>
      ) : (
        <p className={classes.CartPrice}>{ctx.totalPrice}</p>
      )}

      <button
        className={`${classes.Button} ${
          ctx.totalAmount === 0 ? classes.Disabled : ""
        }`}
      >
        去结算
      </button>
    </div>
  );
};
export default Cart;
