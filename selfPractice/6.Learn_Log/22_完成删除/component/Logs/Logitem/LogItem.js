import MyDate from "./MyDate/MyDate"
import Card from '../../UI/Card'
import './LogItem.css'
const LogItem = (props)=>{
const buttonClick = ()=>{
    const isDel= window.confirm('确认删除?')
    if(isDel)  props.delLogHandler()
}

    return <Card className="item">
       <MyDate date={props.date}/>
       <div className="content">
            <h2 className="desc">{props.desc}</h2>
            <div className="time">{props.time}分钟</div>
        </div>
        <div>
            <div className='delItem' onClick={buttonClick}>x</div>
        </div>
   </Card> 
}

export default LogItem