import LogItem from "./Logitem/LogItem";
import Card from "../UI/Card/Card";
import "./Logs.css";
import LogFilter from "./LogFilter/LogFilter";
import { useState } from "react";
const Logs = (props) => {
  //创建存储年份的state
  const [year, setYear] = useState(2022);
  //创建修改年份的函数
  const changeYearHandle = (year) => {
    setYear(year);
  };
  //过滤数据,只显示某一年的数据
  let filterData = props.logsData.filter(
    (item) => item.date.getFullYear() === year
  );
  let logItemDate = filterData.map((item) => (
    <LogItem
      key={item.id}
      date={item.date}
      desc={item.desc}
      time={item.time}
      delLogHandler={() => props.delLogHandler(item.id)}
    />
  ));
  if (logItemDate.length === 0) {
    logItemDate = <p className="no-logs">没有找到日志!</p>;
  }
  return (
    <Card className="logs">
      <LogFilter year={year} changeYear={changeYearHandle} />
      {logItemDate}
      {/* {logItemDate.length !== 0 ? (
        logItemDate
      ) : (
        <p className="no-logs">没有找到日志!</p>
      )} */}
    </Card>
  );
};
export default Logs;
