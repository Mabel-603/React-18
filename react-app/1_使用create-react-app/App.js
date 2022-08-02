import { useState } from "react";
import "./App.css";
const App = () => {
  const [redBorder, serRedBorder] = useState(true);
  const onAvertCorColor = () => {
    serRedBorder(false);
  };
  return (
    <div>
      <p className={`p1 ${redBorder ? "" : "blueBorder"}`}>我是一个段落</p>
      <button onClick={onAvertCorColor}>点我</button>
    </div>
  );
};
export default App;
