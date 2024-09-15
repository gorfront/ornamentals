import { useEffect, useRef, useState } from "react";
import { selectCategories } from "../../store/slices/categoriesSlice/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { fetchCategory } from "../../store/slices/categoriesSlice/categoriesAPI";
import { addSubCategory } from "../../store/slices/subCategoriesSlice/subCategoriesSlice";
import { ShowProps } from "../SubCategories/SubCategories";
import "./AddSubcategory.scss";

const AddSubcategory: React.FC<ShowProps> = ({ show, setShow }) => {
  const [value, setValue] = useState("");
  const categories = useAppSelector(selectCategories).filter((el) => el.active);
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
    if (value.trim()) {
      dispatch(addSubCategory({ name: value.trim() }));
      setValue("");
      hideHandler();
    }
  };

  return (
    <div className="back" ref={ref} style={{ display: show }}>
      <div className="addSubcategory">
        <header className="addSubcategory--header">
          <h2 className="addSubcategory--header__title">
            {categories.length > 0
              ? `${categories[0]?.name} : Добавить Подкатегория`
              : "Добавить Подкатегория"}
          </h2>
          <button
            className="addSubcategory--header__btn"
            onClick={hideHandler}
            aria-label="Close"
          >
            <img src="close.svg" alt="Close" />
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
          <button type="submit" className="addSubcategory--btn">
            Добавить
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSubcategory;
