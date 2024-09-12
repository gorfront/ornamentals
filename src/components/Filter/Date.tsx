import { useState } from "react";

const Date = () => {
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  return (
    <div className="date-filter">
      <div className="date-filter_item">
        <label htmlFor="date">{date1 ? date1 : "Дата"}</label>
        <input
          type="date"
          name="date"
          id="date"
          value={date1}
          onChange={(e) => setDate1(e.target.value)}
        />
      </div>
      <div className="date-filter_item">
        <label htmlFor="date">{date2 ? date2 : "Дата"}</label>
        <input
          type="date"
          name="date"
          id="date"
          value={date2}
          onChange={(e) => setDate2(e.target.value)}
        />
      </div>
    </div>
  );
};
export default Date;
