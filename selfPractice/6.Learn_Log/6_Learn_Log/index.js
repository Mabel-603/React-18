import ReactDOM from 'react-dom/client';
import './index.css'
const App = <div className='logs'>
   {/* 日志项容器 */}
   <div className="item">
    {/* 日期的容器 */}
    <div className="date">
      <div className="month">
        七月
      </div>
      <div className="day">
        7
      </div>
    </div>
    {/* 日志内容的容器 */}
    <div className="content">
            <h2 className="desc">学习React</h2>
            <div className="time">40分钟</div>
        </div>
   </div>     
      {/* 日志项容器 */}
      <div className="item">
    {/* 日期的容器 */}
    <div className="date">
      <div className="month">
        七月
      </div>
      <div className="day">
        8
      </div>
    </div>
    {/* 日志内容的容器 */}
    <div className="content">
            <h2 className="desc">学习Promise</h2>
            <div className="time">40分钟</div>
        </div>
   </div>  
      {/* 日志项容器 */}
      <div className="item">
    {/* 日期的容器 */}
    <div className="date">
      <div className="month">
        七月
      </div>
      <div className="day">
        9
      </div>
    </div>
    {/* 日志内容的容器 */}
    <div className="content">
            <h2 className="desc">学习Ajax</h2>
            <div className="time">40分钟</div>
        </div>
   </div>  
      {/* 日志项容器 */}
      <div className="item">
    {/* 日期的容器 */}
    <div className="date">
      <div className="month">
        七月
      </div>
      <div className="day">
        10
      </div>
    </div>
    {/* 日志内容的容器 */}
    <div className="content">
            <h2 className="desc">学习Vue</h2>
            <div className="time">40分钟</div>
        </div>
   </div>  

</div>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(App)