
import { useState } from 'react';
import './App.css'

const App = ()=>{
    const [counter,setCounter] = useState(1)
    const lessHandler = ()=>{
        setCounter(counter-1);
    }
    const addHandler = ()=>{
        setCounter(counter+1);
    }
    return <div className="container">
        <h1>{counter}</h1>
        <button className="btn" onClick={lessHandler}>-</button>
        <button className="btn" onClick={addHandler}>+</button>
    </div>
}
export default App;