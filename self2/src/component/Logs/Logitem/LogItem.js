import { useState } from "react";
import Card from "../../UI/Card/Card";
import ConfirmModal from "../../UI/ConfirmModal/ConfirmModal";
import "./LogItem.css";
import MyDate from "./MyDate/MyDate";
const LogItem = (props) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const buttonClick = () => {
    setShowConfirm(true);
  };
  const onOk = () => {
    props.delLogHandler();
    setShowConfirm(false);
  };
  const onCancle = () => {
    setShowConfirm(false);
  };
  return (
    <Card className="item">
      {showConfirm && (
        <ConfirmModal okHandler={onOk} cancleHandler={onCancle}></ConfirmModal>
      )}
      <MyDate date={props.date}></MyDate>
      <div className="content">
        <h2 className="desc">{props.desc}</h2>
        <div className="time">{props.time}分钟</div>
      </div>
      <div>
        <div onClick={buttonClick} className="delete">
          x
        </div>
      </div>
    </Card>
  );
};
export default LogItem;
