import classes from "./CheckoutItem.module.css";
import Counter from "../../../UI/Counter/Counter";
const CheckoutItem = (props) => {
  return (
    <div className={classes.CheckoutItem}>
      <div className={classes.CheckoutImg}>
        <img src="/img/meals/1.png" />
      </div>
      <div className={classes.Desc}>
        <h2 className={classes.Title}>{props.meal.title}</h2>
        <div className={classes.PriceOuter}>
          <Counter amount={props.meal.amount} meal={props.meal} />
          <div className={classes.Price}>
            {props.meal.price * props.meal.amount}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutItem;
