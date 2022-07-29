import { useState } from "react";
import Logs from "./component/Logs/Logs";
import LogsForm from "./component/LogsForm/LogsForm";
import "./App.css";
const App = () => {
  const [logsData, setLogsData] = useState([
    {
      id: "001",
      date: new Date(2021, 1, 20, 18, 30),
      desc: "学习Promise",
      time: 30,
    },
    {
      id: "002",
      date: new Date(2022, 2, 10, 12, 30),
      desc: "学习Ajax",
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
    newLog.id = Date.now() + ""; //根据时间随机生成一个唯一的id
    setLogsData([...logsData, newLog]);
  };
  const deleteLogHandler = (id) => {
    setLogsData((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };
  return (
    <div className="app">
      <LogsForm onSaveLog={saveLogHandler} />
      <Logs logsData={logsData} onDelLog={deleteLogHandler} />
    </div>
  );
};
export default App;
