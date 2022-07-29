import { useState } from "react";
import MyDate from "./MyDate/MyDate";
import Card from "../../UI/Card/Card";
import ConfirmModal from "../../UI/ConfirmModal/ConfirmModal";
import "./LogItem.css";
const LogItem = (props) => {
  // 添加一个state，记录是否显示确认窗口
  const [showConfirm, setShowConfirm] = useState(false);
  // const buttonClick = () => {
  //   const isDel = window.confirm("确认删除?");
  //   if (isDel) props.delLogHandler();
  // };

  const buttonClick = () => {
    setShowConfirm(true);
  };
  const okHandler = () => {
    props.delLogHandler();
  };
  const cancelHandler = () => {
    setShowConfirm(false);
  };
  /*
    portal
     */
  return (
    <Card className="item">
      {showConfirm && (
        <ConfirmModal
          okHandler={okHandler}
          cancelHandler={cancelHandler}
          confirmText="该操作不可恢复,确认吗?"
        />
      )}
      <MyDate date={props.date} />
      <div className="content">
        <h2 className="desc">{props.desc}</h2>
        <div className="time">{props.time}分钟</div>
      </div>
      <div>
        <div className="delItem" onClick={buttonClick}>
          x
        </div>
      </div>
    </Card>
  );
};

export default LogItem;
