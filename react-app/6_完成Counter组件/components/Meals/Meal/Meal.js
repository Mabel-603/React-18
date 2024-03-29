import Counter from "../../UI/Counter/Counter";
import classes from "./Meal.module.css";
const Meal = () => {
  return (
    <div className={classes.Meal}>
      <div className={classes.ImgBox}>
        <img src="/img/meals/1.png" />
        {/* <img src="../../../../public/img/meals/1.png" /> */}
      </div>
      <div>
        <h2 className={classes.Title}>汉堡包</h2>
        <p className={classes.Desc}>
          百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！
        </p>
        <div className={classes.PriceWrapper}>
          <span className={classes.Price}>12</span>
          <Counter amount={0} />
        </div>
      </div>
    </div>
  );
};
export default Meal;
