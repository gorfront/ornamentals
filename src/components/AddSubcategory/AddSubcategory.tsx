import { useEffect, useRef, useState } from "react";
import { selectCategories } from "../../store/slices/categoriesSlice/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { fetchCategory } from "../../store/slices/categoriesSlice/categoriesAPI";
import "./AddSubcategory.scss";
import { addSubCategory } from "../../store/slices/subCategoriesSlice/subCategoriesSlice";
import { ShowProps } from "../SubCategories/SubCategories";

const AddSubcategory: React.FC<ShowProps> = ({ show, setShow }) => {
  const [value, setValue] = useState("");
  const category = useAppSelector(selectCategories).filter((el) => el.active);
  const dispatch = useAppDispatch();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const hideHandler = () => {
    if (ref.current) {
      ref.current.style.display = "none";
    }
    setShow((prev) => (prev === "none" ? "flex" : "none"));
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.length > 0) {
      dispatch(addSubCategory({ name: value }));
    }
    hideHandler();
    setValue("");
  };

  console.log(category);

  return (
    <div className="back" ref={ref} style={{ display: show }}>
      <div className="addSubcategory">
        <header className="addSubcategory--header">
          <h2 className="addSubcategory--header__title">
            {category[0]?.name} : Добавить Подкатегория
          </h2>
          <button className="addSubcategory--header__btn" onClick={hideHandler}>
            <img src="close.svg" alt="close" />
          </button>
        </header>
        <form onSubmit={submitHandler} className="addSubcategory--form">
          <input
            type="text"
            placeholder="Подкатегория"
            className="addSubcategory--input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
          <div className="addSubcategory--line"></div>
          <button className="addSubcategory--btn">добавить</button>
        </form>
      </div>
    </div>
  );
};

export default AddSubcategory;
