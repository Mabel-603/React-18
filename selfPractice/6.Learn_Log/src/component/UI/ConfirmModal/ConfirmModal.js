import Card from "../Card/Card";
import BackDrop from "../BackDrop/BackDrop";
import "./ConfirmModal.css";
const ConfirmModal = (props) => {
  return (
    <BackDrop>
      <Card className="confirmModal">
        <div className="confirmText">{props.confirmText}</div>
        <div className="confirmButton">
          <button className="okButton" onClick={props.okHandler}>
            确认
          </button>
          <button onClick={props.cancelHandler}>取消</button>
        </div>
      </Card>
    </BackDrop>
  );
};

export default ConfirmModal;
