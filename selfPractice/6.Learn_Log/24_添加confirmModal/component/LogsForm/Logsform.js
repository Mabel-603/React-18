
import { useState } from 'react'
import Card from '../UI/Card/Card'
import './LogsForm.css'
const LogsForm = (props)=>{

   const [inputDate,setInputDate] = useState('')
   const [inputDesc,setInputDesc] = useState('')
   const [inputTime,setInputTime] = useState('')


  const dateChangeHandler = (e)=>{
    setInputDate(e.target.value)
  }
  const descChangeHandler = (e)=>{
    setInputDesc(e.target.value)
  }
  const timeChangeHandler = (e)=>{
    setInputTime(e.target.value)
  }

const formSubmitHandler = (e)=>{
  e.preventDefault();
  const newLog = {
    date:new Date(inputDate),
    desc:inputDesc,
    time:+inputTime
  }
  props.saveLogHandler(newLog)
  setInputDate('')
  setInputDesc('')
  setInputTime('')
}

return <div>
  <Card  className='logs-form'>
    <form onSubmit={formSubmitHandler}>
      <div className="form-item">
        <label htmlFor="date">日期</label>
        <input onChange={dateChangeHandler} value={inputDate} id='date' type="date" />
      </div>
      <div className="form-item">
        <label htmlFor="desc">内容</label>
        <input onChange={descChangeHandler} value={inputDesc} id='desc' type="text" />
      </div>
      <div className="form-item">
        <label htmlFor="time">时长</label>
        <input onChange={timeChangeHandler} value={inputTime} id='time' type="number" />
      </div>
      <div className="form-btn">
        <button>添加</button>
      </div>
    </form>

  </Card>

  
</div>

}
export default LogsForm