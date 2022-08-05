import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from "./CartDetails.module.css";
import CartContext from "../../../store/cart-context";
import { useContext, useState } from "react";
import Meal from "../../Meals/Meal/Meal";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Confirm from "../../UI/Confirm/Confirm";
const CartDetails = () => {
  const ctx = useContext(CartContext);
  // 添加一个state来设置清空购物车弹出框是否显示
  const [showDetails, setShowDetails] = useState(false);
  const showConfirmHandle = () => {
    setShowDetails(true);
  };
  const cancleHandler = (e) => {
    e.stopPropagation();
    setShowDetails(false);
  };
  const okHandler = () => {
    ctx.clearCart();
    setShowDetails(false);
  };
  return (
    <Backdrop>
      {showDetails && <Confirm onCancle={cancleHandler} onOk={okHandler} />}
      <div className={classes.CartDetails} onClick={(e) => e.stopPropagation()}>
        <div className={classes.Header}>
          <h2 className={classes.Title}>餐品详情</h2>
          <div onClick={showConfirmHandle} className={classes.Clear}>
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
