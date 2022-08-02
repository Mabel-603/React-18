import classes from "./Counter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
// import { solid } from "@fortawesome/free-solid-svg-core/import.macro";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   solid,
//   regular,
//   brands,
// } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

/*
引入FontAwesome
       -安装依赖
      npm i --save @fortawesome/fontawesome-svg-core
      npm i --save @fortawesome/free-solid-svg-icons
      npm i --save @fortawesome/free-regular-svg-icons
      npm i --save @fortawesome/react-fontawesome@latest
        - 引入组件
               import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
        - 引入图标
                import {faPlus} from "@fortawesome/free-solid-svg-icons";
        - 使用组件
                <FontAwesomeIcon icon={faPlus}/>

*/

const Counter = (props) => {
  return (
    <div className={classes.Counter}>
      {props.amount && props.amount !== 0 ? (
        <>
          <button className={classes.Sub}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className={classes.Number}>{props.amount}</span>
        </>
      ) : null}
      <button className={classes.Add}>
        {/* <FontAwesomeIcon icon={solid("user-secret")} />
        <FontAwesomeIcon icon={regular("coffee")} />
        <FontAwesomeIcon icon={brands("twitter")} /> */}
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};
export default Counter;
