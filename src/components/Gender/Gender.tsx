import { useEffect, useState } from "react";
import data from "../../utils/db.json";
import "./Gender.scss";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import {
  selectGender,
  toggleActiveGender,
} from "../../store/slices/genderSlice/genderSlice";
import { fetchGender } from "../../store/slices/genderSlice/genderAPI";

const Gender = () => {
  const genders = useAppSelector(selectGender);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGender());
  }, []);

  const toggleActive = (id: string) => {
    dispatch(toggleActiveGender(id));
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
