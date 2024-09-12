import { useState } from "react";
import "./Filter.scss";
import Sidebar from "./Sidebar";

const Filter = () => {
  const [visible, setVisible] = useState<string>("none");
  return (
    <>
      <Sidebar visible={visible} />
      <div
        className="filter"
        onClick={() =>
          setVisible((prev) => (prev === "none" ? "block" : "none"))
        }
      >
        <div className="filter--main">
          <div className="filter--main--img">
            <img src="filter.svg" alt="filter" />
          </div>
          <div className="filter--main--text">
            <span>ф</span>
            <span>и</span>
            <span>л</span>
            <span>ь</span>
            <span>т</span>
            <span>р</span>
          </div>
        </div>
        <div className="filter--btn">
          <img src="right.svg" alt="right" />
        </div>
      </div>
    </>
  );
};
export default Filter;
