import Counter from "../../UI/Counter/Counter";
import classes from "./Meal.module.css";
const Meal = (props) => {
  return (
    <div className={classes.Meal}>
      <div className={classes.ImgBox}>
        <img src={props.item.img} />
        {/* <img src="../../../../public/img/meals/1.png" /> */}
      </div>
      <div>
        <h2 className={classes.Title}>{props.item.title}</h2>
        <p className={classes.Desc}>{props.item.desc}</p>
        <div className={classes.PriceWrapper}>
          <span className={classes.Price}>{props.item.price}</span>
          <Counter amount={0} />
        </div>
      </div>
    </div>
  );
};
export default Meal;
