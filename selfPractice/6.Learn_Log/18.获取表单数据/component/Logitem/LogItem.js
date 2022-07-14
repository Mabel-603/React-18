import MyDate from "./MyDate/MyDate"
import Card from '../UI/Card'
import './LogItem.css'
const LogItem = (props)=>{
    return <Card className="item">
       <MyDate date={props.date}/>
       <div className="content">
            <h2 className="desc">{props.desc}</h2>
            <div className="time">{props.time}分钟</div>
        </div>
   </Card> 
}

export default LogItem