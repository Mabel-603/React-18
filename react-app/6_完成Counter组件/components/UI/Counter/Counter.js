import classes from "./Counter.module.css";
const Counter = (props) => {
  return (
    <div className={classes.Counter}>
      {props.amount && props.amount !== 0 ? (
        <>
          <button className={classes.Sub}>
            <span>-</span>
          </button>
          <span className={classes.Number}>{props.amount}</span>
        </>
      ) : null}
      <button className={classes.Add}>
        <span>+</span>
      </button>
    </div>
  );
};
export default Counter;
