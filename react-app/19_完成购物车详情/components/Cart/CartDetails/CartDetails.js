import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from "./CartDetails.module.css";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";
import Meal from "../../Meals/Meal/Meal";
import Backdrop from "../../UI/Backdrop/Backdrop";
const CartDetails = () => {
  const ctx = useContext(CartContext);
  return (
    <Backdrop>
      <div className={classes.CartDetails}>
        <div className={classes.Header}>
          <h2 className={classes.Title}>餐品详情</h2>
          <div className={classes.Clear}>
            <FontAwesomeIcon icon={faTrash} />
            <span>清空购物车</span>
          </div>
        </div>

        <div className={classes.MealList}>
          {ctx.items.map((item) => (
            <Meal noDesc key={item.id} meal={item} />
          ))}
        </div>
      </div>
    </Backdrop>
  );
};

export default CartDetails;
