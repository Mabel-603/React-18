
import './App.css'

const App = (event)=>{
   const clickHandler = (event)=>{
     event.preventDefault()
    event.stopPropagation()
    alert('我是App中的clickHandler！');
   }
   
   return <div onClick={()=>{alert('div')}}
   style={{width:200,height:200,margin:"100px auto",background:'#bfa'}}>
       <button onClick = {()=>{ alert(123)}}>
        点我一下
       </button>
       <button onClick = {clickHandler}>haha</button>
       <a href="https://www.baidu.com"  onClick = {clickHandler}>超链接</a>
    </div>
}
export default App;