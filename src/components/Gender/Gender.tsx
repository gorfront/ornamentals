import { useEffect } from "react";
import "./Gender.scss";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import {
  selectGender,
  toggleActiveGender,
} from "../../store/slices/genderSlice/genderSlice";
import { fetchGender } from "../../store/slices/genderSlice/genderAPI";

const Gender: React.FC = () => {
  const genders = useAppSelector(selectGender);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGender());
  }, [dispatch]);

  const handleToggle = (id: string) => {
    dispatch(toggleActiveGender(id));
  };

  return (
    <div className="gender">
      {genders.map(({ id, name, active, activePhoto, passivePhoto }) => (
        <button
          className="gender-btn"
          key={id}
          onClick={() => handleToggle(id)}
        >
          <img src={active ? activePhoto : passivePhoto} alt={name} />
        </button>
      ))}
    </div>
  );
};

export default Gender;
