import MyDate from "./MyDate/MyDate"
import './LogItem.css'
const LogItem = (props)=>{
    return <div className="item">
       <MyDate date={props.Date}/>
       <div className="content">
            <h2 className="desc">学习{props.desc}</h2>
            <div className="time">{props.time}分钟</div>
        </div>
   </div> 
}

export default LogItem