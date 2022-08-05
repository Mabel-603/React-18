import classes from "./Cart.module.css";
import iconImg from "../../asset/bag.png";
import CartCopntext from "../../store/cart-context";
import { useContext, useState } from "react";
import CartDetails from "./CartDetails/CartDetails";
import Checkout from "./Checkout/Checkout";
const Cart = () => {
  const ctx = useContext(CartCopntext);
  // 添加一个state来设置详情是否显示
  const [showDetails, setShowDetails] = useState(false);
  // 添加一个state来设置checkout是否显示
  const [showCheckout, setShowCheckout] = useState(false);
  const toggleDetailsHandler = () => {
    if (ctx.totalAmount === 0) {
      setShowDetails(false);
      return;
    }
    setShowDetails((prevState) => !prevState);
  };
  const showCheckoutHandler = () => {
    if (ctx.totalAmount === 0) return;
    setShowCheckout(true);
  };
  const hideCheckoutHandler = () => {
    setShowCheckout(false);
  };
  return (
    <div className={classes.Cart} onClick={toggleDetailsHandler}>
      {showCheckout && <Checkout onHideCheckout={hideCheckoutHandler} />}
      {/*引入购物车的详情*/}
      {showDetails && <CartDetails />}
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
        onClick={showCheckoutHandler}
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
