import Logs from "./component/Logs/Logs";
import LogsForm from "./component/LogsForm/Logsform";
import "./App.css";
import { useState } from "react";

const App = () => {
  // 模拟一组从服务器中加载的数据
  const [logsData, setLogsData] = useState([
    {
      id: "001",
      date: new Date(2021, 1, 20, 18, 30),
      desc: "学习九阴真经",
      time: 30,
    },
    {
      id: "002",
      date: new Date(2022, 2, 10, 12, 30),
      desc: "学习书法",
      time: 20,
    },
    {
      id: "003",
      date: new Date(2022, 2, 11, 11, 30),
      desc: "学习JavaScript",
      time: 40,
    },
    {
      id: "004",
      date: new Date(2022, 2, 15, 10, 30),
      desc: "学习React",
      time: 80,
    },
  ]);
  const saveLogHandler = (newLog) => {
    newLog.id = Date.now() + "";
    setLogsData([...logsData, newLog]);
  };
  // const delLogHandler = (index)=>{
  //     let newLog = [...logsData]
  //     newLog.splice(index,1)
  //   setLogsData(newLog)
  // } 该删除日志的方法通过索引删除,在有过滤功能的日志中删除会出现错误,因此采用id删除的方法
  const delLogHandlerById = (id) => {
    setLogsData((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };
  return (
    <div className="app">
      <LogsForm saveLogHandler={saveLogHandler} />
      <Logs logsData={logsData} delLogHandler={delLogHandlerById} />
    </div>
  );
};
export default App;
/*该模块实现了 1.年份可选择,并实时变化
              2.日志内容根据年份的变化而变化
              3.删除日志时,并不能正确删除,是因为之前所定义的删除日志的函数中,是通过index删除日志,
               造成错误,应采用id进行删除
                */
