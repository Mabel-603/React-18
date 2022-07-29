import LogItem from "./Logitem/LogItem";
import Card from "../UI/Card/Card";
import LogFilter from "./LogFilter/LogFilter";
import { useState } from "react";
import "./Logs.css";
const Logs = (props) => {
  const [year, setYear] = useState(2022);
  let filterData = props.logsData.filter(
    (item) => item.date.getFullYear() === year
  );
  const changeYearHandler = (year) => {
    setYear(year);
  };
  let logItemDate = filterData.map((item) => (
    <LogItem
      key={item.id}
      date={item.date}
      desc={item.desc}
      time={item.time}
      delLogHandler={() => props.onDelLog(item.id)}
    />
  ));
  if (logItemDate.length === 0) {
    logItemDate = <p className="no-logs">没有找到日志！</p>;
  }
  return (
    <Card className="logs">
      <LogFilter onYearChange={changeYearHandler} />
      {logItemDate}
    </Card>
  );
};
export default Logs;
