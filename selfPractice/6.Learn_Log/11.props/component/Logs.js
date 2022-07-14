
import LogItem from './Logitem/LogItem'
import './Logs.css'
const Logs = ()=>{
return <div className='logs'>
    <LogItem desc={'学习react'} time={'50'}/>
    <LogItem desc={'学习Vue'} time={'40'}/>
    <LogItem desc={'学习promise'} time={'30'}/>
    </div>

}
export default Logs