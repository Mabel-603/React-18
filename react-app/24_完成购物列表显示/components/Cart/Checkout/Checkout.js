import classes from "./Checkout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
const Checkout = (props) => {
  const ctx = useContext(CartContext);
  return (
    <div className={classes.CheckoutOuter}>
      <div className={classes.Close} onClick={props.onHideCheckout}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <div className={classes.Desc}>
        <header className={classes.Header}>
          <h2>餐品详情</h2>
        </header>

        <div className={classes.Meals}>
          {ctx.items.map((item) => (
            <CheckoutItem key={item.id} meal={item} />
          ))}
        </div>

        <footer className={classes.Footer}>
          <p className={classes.TotalPrice}>{ctx.totalPrice}</p>
        </footer>
      </div>
    </div>
  );
};
export default Checkout;
