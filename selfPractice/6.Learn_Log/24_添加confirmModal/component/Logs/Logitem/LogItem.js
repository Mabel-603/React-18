import { useState } from "react";
import MyDate from "./MyDate/MyDate";
import Card from "../../UI/Card/Card";
import ConfirmModal from "../../UI/ConfirmModal/ConfirmModal";
import "./LogItem.css";
const LogItem = (props) => {
  // 添加一个state，记录是否显示确认窗口
  const buttonClick = () => {
    const isDel = window.confirm("确认删除?");
    if (isDel) props.delLogHandler();
  };

  return (
    <Card className="item">
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
