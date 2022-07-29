
import Card from '../UI/Card'
import './LogsForm.css'
const LogsForm = ()=>{

   let inputDate = ''
   let inputDesc = ''
   let inputTime = 0

  const dateChangeHandler = (e)=>{
    inputDate = e.target.value;
  }
  const descChangeHandler = (e)=>{
    inputDesc = e.target.value;
  }
  const timeChangeHandler = (e)=>{
    inputTime = e.target.value;
  }

const formSubmitHandler = (e)=>{
  e.preventDefault();
  const newLog = {
    date:new Date(inputDate),
    desc:inputDesc,
    time:inputTime
  }
  console.log(newLog);
}

return <div>
  <Card  className='logs-form'>
    <form onSubmit={formSubmitHandler}>
      <div className="form-item">
        <label htmlFor="date">日期</label>
        <input onChange={dateChangeHandler} id='date' type="date" />
      </div>
      <div className="form-item">
        <label htmlFor="desc">内容</label>
        <input onChange={descChangeHandler} id='desc' type="text" />
      </div>
      <div className="form-item">
        <label htmlFor="time">时长</label>
        <input onChange={timeChangeHandler} id='time' type="number" />
      </div>
      <div className="form-btn">
        <button>添加</button>
      </div>
    </form>

  </Card>

  
</div>

}
export default LogsForm