import Backdrop from "../Backdrop/Backdrop";
import classes from "./Confirm.module.css";
const Confirm = (props) => {
  return (
    <Backdrop className={classes.ConfirmOuter}>
      <div className={classes.Confirm}>
        <div className={classes.ConfirmText}>确定清空购物车吗?</div>
        <div className={classes.ConfirmBtn}>
          <button className={classes.Cancel} onClick={(e) => props.onCancel(e)}>
            取消
          </button>
          <button className={classes.Ok} onClick={props.onOk}>
            确认
          </button>
        </div>
      </div>
    </Backdrop>
  );
};
export default Confirm;
