import ReactDOM from "react-dom/client";
import App from "./App";
// function  App(){
//     return <div>Hello React!!!!</div>
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//当需要让某个组件的优先级最高时,可使用portal
