import Backdrop from "../Backdrop/Backdrop";
import Card from "../Card/Card";
import "./ConfirmModal.css";
const ConfirmModal = (props) => {
  return (
    <Backdrop>
      <Card className="confirmModal">
        <div className="confirmText">
          <p>该操作不可恢复,确认吗?</p>
        </div>
        <div className="confirmButton">
          <button className="okButton" onClick={props.okHandler}>
            确认
          </button>
          <button onClick={props.cancleHandler}>取消</button>
        </div>
      </Card>
    </Backdrop>
  );
};

export default ConfirmModal;
