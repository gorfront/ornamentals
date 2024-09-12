import React from "react";
import "./Filter.scss";
import Date from "./Date";
import Price from "./Price";
import ProductionPrice from "./ProductionPrice";

const Sidebar: React.FC<{ visible: string }> = ({ visible }) => {
  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  return (
    <form
      className="filter-panel"
      style={{ display: visible }}
      onSubmit={submitHandler}
    >
      <Date />

      <Price />
      <ProductionPrice />
      <button className="save-btn">Сохранить</button>
    </form>
  );
};

export default Sidebar;
