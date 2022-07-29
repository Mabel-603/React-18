import { useRef } from "react";

const LogFilter = (props) => {
  const changeY = (e) => {
    props.changeYear(+e.target.value);
    // selectRef.value = +e.target.value; 本想检测选择框值的改变,然后直接改变显示的值
  };
  return (
    <div>
      年份:
      <select onChange={changeY} value={props.year}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </div>
  );
};
export default LogFilter;
