import { useState } from "react";

const DateFilter: React.FC = () => {
  const [date1, setDate1] = useState<string>("");
  const [date2, setDate2] = useState<string>("");

  return (
    <div className="date-filter">
      <div className="date-filter_item">
        <label htmlFor="date1">{date1 ? date1 : "Дата"}</label>
        <input
          type="date"
          id="date1"
          value={date1}
          onChange={(e) => setDate1(e.target.value)}
        />
      </div>
      <div className="date-filter_item">
        <label htmlFor="date2">{date2 ? date2 : "Дата"}</label>
        <input
          type="date"
          id="date2"
          value={date2}
          onChange={(e) => setDate2(e.target.value)}
        />
      </div>
    </div>
  );
};

export default DateFilter;
