import React from "react";
import "./BackDrop.css";

const BackDrop = (props) => {
  return (
    <div className="backDrop">
      {props.children}
      {/*把组件的子元素放到这里面*/}
    </div>
  );
};

export default BackDrop;
