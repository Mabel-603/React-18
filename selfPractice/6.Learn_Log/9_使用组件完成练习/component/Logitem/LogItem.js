import MyDate from "./MyDate/MyDate"
import './LogItem.css'
const LogItem = ()=>{
    return <div className="item">
       <MyDate/>
       <div className="content">
            <h2 className="desc">学习Vue</h2>
            <div className="time">40分钟</div>
        </div>
   </div> 
}

export default LogItem