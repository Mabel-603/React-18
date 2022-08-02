import { useState } from "react";
import classes from "./App.module.css";
const App = () => {
  const [showBorder, setShowBorder] = useState(true);
  const addBorder = () => {
    setShowBorder(false);
  };
  return (
    <div>
      <p className={`${classes.p1} ${showBorder ? "" : classes.buttonBorder}`}>
        我是一个段落
      </p>
      <button onClick={addBorder}>点我</button>
    </div>
  );
};
export default App;
