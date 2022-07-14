
import { useState } from 'react';
import './App.css'

const App = ()=>{
    const [counter,setCounter] = useState(1)
    const [user,setUser] = useState({name:'孙悟空',age:18})
    const lessHandler = ()=>{
        // setCounter(counter-1);
        setUser({...user,name:'猪八戒'})
    }
    const addHandler = ()=>{
        // setCounter(counter+1);//这样容易出现点击次数过快,counter增加的次数不够
        setCounter(prevCounter=>prevCounter+1)
    }
    return <div className="container">
        <h1>{counter}--{user.name}--{user.age}</h1>
        <button className="btn" onClick={lessHandler}>-</button>
        <button className="btn" onClick={addHandler}>+</button>
    </div>
}
export default App;