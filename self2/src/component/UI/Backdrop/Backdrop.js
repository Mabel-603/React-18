import ReactDOM from "react-dom";
import "./Backdrop.css";
const backdropRoot = document.getElementById("backdrop-root");
const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div className="backdrop">{props.children}</div>,
    backdropRoot
  );
};
export default Backdrop;
