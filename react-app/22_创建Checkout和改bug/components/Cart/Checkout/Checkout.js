import classes from "./Checkout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Checkout = (props) => {
  return (
    <div className={classes.CheckoutOuter}>
      <div className={classes.Close} onClick={props.onHideCheckout}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </div>
  );
};
export default Checkout;
