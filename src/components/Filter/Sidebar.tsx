import React from "react";
import "./Filter.scss";
import Date from "./Date";
import Price from "./Price";

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
      <Price type={"realPrice"} />
      <Price type={"productionPrice"} />
      <button type="submit" className="save-btn">
        Сохранить
      </button>
    </form>
  );
};

export default Sidebar;
