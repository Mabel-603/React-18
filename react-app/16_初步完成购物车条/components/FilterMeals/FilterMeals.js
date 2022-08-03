import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./FilterMeals.module.css";
import { useState } from "react";
const FilterMeals = (props) => {
  let [isCanSearch, setIsCanSearch] = useState(true);
  const inputChangeHandler = (e) => {
    if (isCanSearch) {
      //加入节流
      const keyword = e.target.value;
      console.log(keyword);
      props.onFilter(keyword);
      setIsCanSearch(false);
      setTimeout(() => {
        setIsCanSearch(true);
      }, 300);
    }
  };
  return (
    <div className={classes.FilterMeals}>
      <div className={classes.InputOuter}>
        <input
          onChange={inputChangeHandler}
          className={classes.SearchInput}
          type="text"
          placeholder="请输入关键字"
        />
        <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch} />
      </div>
    </div>
  );
};
export default FilterMeals;
