import classes from "./Counter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Counter = (props) => {
  return (
    <div className={classes.Counter}>
      {props.amount && props.amount !== 0 ? (
        <>
          <button className={classes.Sub}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className={classes.Number}>{props.amount}</span>
        </>
      ) : null}
      <button className={classes.Add}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};
export default Counter;
