
import LogItem from './Logitem/LogItem'
import './Logs.css'
const Logs = ()=>{
return <div className='logs'>
    <LogItem Date = {new Date(2021,7,20,19,0)} desc={'学习react'} time={'50'}/>
    <LogItem Date = {new Date(2022,3,12,10,10)} desc={'学习Vue'} time={'40'}/>
    <LogItem Date = {new Date(2020,6,16,18,20)}desc={'学习promise'} time={'30'}/>
    </div>

}
export default Logs