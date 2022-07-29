
import LogItem from './Logitem/LogItem'
import Card from '../UI/Card'
import './Logs.css'
const Logs = (props)=>{
    
    const logItemDate = props.logsData.map((item,index)=><LogItem key={item.id}  date={item.date} desc={item.desc} time={item.time} delLogHandler={()=>props.delLogHandler(index)}/>)
return <Card className='logs'>
    {logItemDate}
    </Card>

}
export default Logs