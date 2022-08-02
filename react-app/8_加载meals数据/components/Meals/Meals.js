import Meal from "./Meal/Meal";
import classes from "./Meals.module.css";
const Meals = (props) => {
  return (
    <div className={classes.Meals}>
      {props.mealsData.map((item) => (
        <Meal key={item.id} item={item} />
      ))}
    </div>
  );
};
export default Meals;
