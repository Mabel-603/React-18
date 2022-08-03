import classes from "./Counter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import TestContext from "../../../store/cart-context";
import { useContext } from "react";
const Counter = (props) => {
  const ctx = useContext(TestContext);
  const addButtonHandler = () => {
    ctx.addItem(props.meal);
  };
  const subButtonHandler = () => {
    ctx.subItem(props.meal);
  };
  return (
    <div className={classes.Counter}>
      {props.amount && props.amount !== 0 ? (
        <>
          <button className={classes.Sub} onClick={subButtonHandler}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className={classes.Number}>{props.amount}</span>
        </>
      ) : null}
      <button className={classes.Add} onClick={addButtonHandler}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};
export default Counter;
