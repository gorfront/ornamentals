import React from "react";
import "./Filter.scss";
import Date from "./Date";
import Price from "./Price";
import ProductionPrice from "./ProductionPrice";

interface SidebarProps {
  visible: string;
}

const Sidebar: React.FC<SidebarProps> = ({ visible }) => {
  const submitHandler = (e: React.FormEvent) => {
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
      <button type="submit" className="save-btn">
        Сохранить
      </button>
    </form>
  );
};

export default Sidebar;
