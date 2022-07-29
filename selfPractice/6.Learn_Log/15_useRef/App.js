
import { useState ,useRef} from 'react';
import './App.css'

const App = ()=>{
    const h1Ref = useRef()
    const [counter,setCounter] = useState(1)
    const lessHandler = ()=>{
        setCounter(counter-1);
    }
    const addHandler = ()=>{
        // setCounter(counter+1);//这样容易出现点击次数过快,counter增加的次数不够
        setCounter(prevCounter=>prevCounter+1)
        alert(h1Ref.current.innerText)
    }
    return <div className="container">
        <h1 ref={h1Ref}>{counter}</h1>
        <button className="btn" onClick={lessHandler}>1</button>
        <button className="btn" onClick={addHandler}>2</button>
    </div>
}
export default App;