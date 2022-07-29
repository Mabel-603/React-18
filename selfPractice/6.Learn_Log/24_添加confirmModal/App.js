import Logs from "./component/Logs/Logs";
import LogsForm from './component/LogsForm/Logsform'
import ConfirmModal from "./component/UI/ConfirmModal/ConfirmModal";
import './App.css'
import { useState } from "react";

const App = ()=>{
     // 模拟一组从服务器中加载的数据
    const [logsData,setLogsData] = useState( [
        {
            id: '001',
            date: new Date(2021, 1, 20, 18, 30),
            desc: '学习九阴真经',
            time: 30
        },
        {
            id: '002',
            date: new Date(2022, 2, 10, 12, 30),
            desc: '学习书法',
            time: 20
        },
        {
            id: '003',
            date: new Date(2022, 2, 11, 11, 30),
            desc: '学习JavaScript',
            time: 40
        },
        {
            id: '004',
            date: new Date(2022, 2, 15, 10, 30),
            desc: '学习React',
            time: 80
        }
    ])
    const saveLogHandler = (newLog)=>{
        newLog.id = Date.now() + '';
      setLogsData([...logsData,newLog])
    }
    const delLogHandler = (index)=>{
        let newLog = [...logsData]
        newLog.splice(index,1)
      setLogsData(newLog)
    }
    return <div className="app">
        <ConfirmModal></ConfirmModal>
        <LogsForm saveLogHandler={saveLogHandler}/>
        <Logs logsData={logsData} delLogHandler={delLogHandler}/>
    </div>
}
export default App;