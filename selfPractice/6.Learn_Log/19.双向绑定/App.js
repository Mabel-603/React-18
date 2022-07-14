import Logs from "./component/Logs";
import LogsForm from './component/LogsForm/Logsform'
import './App.css'

const App = ()=>{
    return <div className="app">
        <LogsForm/>
        <Logs/>
    </div>
}
export default App;