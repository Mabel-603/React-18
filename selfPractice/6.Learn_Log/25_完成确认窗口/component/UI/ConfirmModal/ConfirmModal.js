import Card from "../Card/Card";
import BackDrop from "../BackDrop/BackDrop";
import "./ConfirmModal.css";
const ConfirmModal = (props) => {
  return (
    <BackDrop>
      {/*当弹出一个删除提示框后,不能再进行点击其他内容,BackDrop遮罩作用 */}
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
