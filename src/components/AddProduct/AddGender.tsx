import { useEffect, useRef, useState } from "react";
import { selectGender } from "../../store/slices/genderSlice/genderSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import "./AddProduct.scss";
import { fetchGender } from "../../store/slices/genderSlice/genderAPI";

const AddGender: React.FC<{
  setGenderName: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setGenderName }) => {
  const [activeGenderId, setActiveGenderId] = useState<string | null>(null);
  const genders = useAppSelector(selectGender);
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(fetchGender());
  }, [dispatch]);

  const toggleActive = (id: string, name: string) => {
    setActiveGenderId(id);
    setGenderName(name);
  };

  return (
    <div className="addProduct--check__gender" ref={ref}>
      {genders.map((el) => (
        <button
          key={el.id}
          id={el.id}
          className="addProduct--check__gender__btn"
          onClick={() => toggleActive(el.id, el.name)}
        >
          <img
            src={activeGenderId === el.id ? el.activePhoto : el.passivePhoto}
            alt={el.name}
          />
        </button>
      ))}
    </div>
  );
};

export default AddGender;
