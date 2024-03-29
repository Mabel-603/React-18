import Counter from "../../UI/Counter/Counter";
import classes from "./Meal.module.css";
const Meal = (props) => {
  return (
    <div className={classes.Meal}>
      <div className={classes.ImgBox}>
        <img src={props.meal.img} />
      </div>
      <div>
        <h2 className={classes.Title}>{props.meal.title}</h2>
        <p className={classes.Desc}>{props.meal.desc}</p>
        <div className={classes.PriceWrapper}>
          <span className={classes.Price}>{props.meal.price}</span>
          <Counter
            amount={props.meal.amount}
            onAdd={props.onAdd}
            onSub={props.onSub}
            meal={props.meal}
          />
        </div>
      </div>
    </div>
  );
};
export default Meal;
