import { useEffect, useState } from "react";
import { selectGender } from "../../store/slices/genderSlice/genderSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { fetchGender } from "../../store/slices/genderSlice/genderAPI";
import "./AddProduct.scss";

// Define a type for gender objects
interface Gender {
  id: string;
  name: string;
  activePhoto: string;
  passivePhoto: string;
}

const AddGender: React.FC<{
  setGenderName: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setGenderName }) => {
  const [activeGenderId, setActiveGenderId] = useState<string | null>(null);
  const genders = useAppSelector(selectGender);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchGender());
      } catch (error) {
        console.error("Failed to fetch genders:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  const toggleActive = (id: string, name: string) => {
    setActiveGenderId(id);
    setGenderName(name);
  };

  return (
    <div className="addProduct--check__gender">
      {genders.map((el: Gender) => (
        <button
          key={el.id}
          id={el.id}
          className={
            activeGenderId === el.id
              ? "addProduct--check__gender__btn addProduct--check__gender__btn--active"
              : "addProduct--check__gender__btn"
          }
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
