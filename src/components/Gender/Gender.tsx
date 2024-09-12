import { useState } from "react";
import data from "../../utils/db.json";
import "./Gender.scss";

const Gender = () => {
  const [genders, setGender] = useState(data.genders);

  const toggleActive = (id: string) => {
    setGender(
      genders.map((item) =>
        item.id === id
          ? { ...item, active: !item.active }
          : {
              ...item,
              active: false,
            }
      )
    );
  };

  return (
    <div className="gender">
      {genders.map((gender) => (
        <button
          className="gender-btn"
          key={gender.id}
          onClick={() => toggleActive(gender.id)}
        >
          <img
            src={gender.active ? gender.activePhoto : gender.passivePhoto}
            alt={gender.name}
          />
        </button>
      ))}
    </div>
  );
};
export default Gender;
