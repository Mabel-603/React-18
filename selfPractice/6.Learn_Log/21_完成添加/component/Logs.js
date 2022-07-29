
import LogItem from './Logitem/LogItem'
import Card from './UI/Card'
import './Logs.css'
const Logs = (props)=>{
    
    const logItemDate = props.logsData.map(item=><LogItem key={item.id} date={item.date} desc={item.desc} time={item.time}/>)
return <Card className='logs'>
    {logItemDate}
    </Card>

}
export default Logs