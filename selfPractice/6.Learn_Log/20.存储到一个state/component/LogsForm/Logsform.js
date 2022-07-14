
import { useState } from 'react'
import Card from '../UI/Card'
import './LogsForm.css'
const LogsForm = ()=>{

  //  const [inputDate,setInputDate] = useState('')
  //  const [inputDesc,setInputDesc] = useState('')
  //  const [inputTime,setInputTime] = useState('')
  const [formData,setFormData] = useState({
    inputDate:'',
    inputDesc:'',
    inputTime:''
  })

  const dateChangeHandler = (e)=>{
    setFormData({...formData,inputDate:e.target.value})
  }
  const descChangeHandler = (e)=>{
    setFormData({...formData,inputDesc:e.target.value})
  }
  const timeChangeHandler = (e)=>{
    setFormData({...formData,inputTime:e.target.value})
  }

const formSubmitHandler = (e)=>{
  e.preventDefault();
  const newLog = {
    date:new Date(formData.inputDate),
    desc:formData.inputDesc,
    time:+formData.inputTime
  }
  setFormData({
    inputDate:'',
    inputDesc:'',
    inputTime:''
  })
  console.log(newLog);
}

return <div>
  <Card  className='logs-form'>
    <form onSubmit={formSubmitHandler}>
      <div className="form-item">
        <label htmlFor="date">日期</label>
        <input onChange={dateChangeHandler} value={formData.inputDate} id='date' type="date" />
      </div>
      <div className="form-item">
        <label htmlFor="desc">内容</label>
        <input onChange={descChangeHandler} value={formData.inputDesc} id='desc' type="text" />
      </div>
      <div className="form-item">
        <label htmlFor="time">时长</label>
        <input onChange={timeChangeHandler} value={formData.inputTime} id='time' type="number" />
      </div>
      <div className="form-btn">
        <button>添加</button>
      </div>
    </form>

  </Card>

  
</div>

}
export default LogsForm