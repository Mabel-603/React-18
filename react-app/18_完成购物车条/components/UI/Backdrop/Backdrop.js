import ReactDOM from "react-dom";
import classes from "./Backdrop.module.css";

const backdropRoot = document.getElementById("backdrop-root");

const Backdrop = () => {
  return ReactDOM.createPortal(
    <div className={`${classes.Backdrop}`}></div>,
    backdropRoot
  );
};

export default Backdrop;
