import { useRef, useState } from "react";
import AddCategory from "./AddCategory";
import AddGender from "./AddGender";
import AddPhoto from "./AddPhoto";
import "./AddProduct.scss";
import AddSubCategory from "./AddSubCategory";
import AddTextPart from "./AddTextPart";
import { useAppDispatch } from "../../utils/hooks";
import { addMain } from "../../store/slices/mainSlice/mainSlice";

const AddProduct = () => {
  const [genderName, setGenderName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [photo, setPhoto] = useState<string | undefined>("");
  const [textPart, setTextPart] = useState([
    {
      id: "0",
      value: "",
    },
    { id: "1", value: "" },
  ]);
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(
      addMain({
        image: photo?.toString(),
        price: textPart[1].value + "$",
        category: categoryName,
        subcategory: subCategoryName,
        gender: [genderName],
      })
    );

    hideHandler();
    setGenderName("");
    setCategoryName("");
    setSubCategoryName("");
    setPhoto("");
    setTextPart([
      { id: "0", value: "" },
      { id: "1", value: "" },
    ]);
  };

  const hideHandler = () => {
    if (ref.current) {
      ref.current.style.display = "none";
    }
  };

  return (
    <div className="back" ref={ref}>
      <div className="addProduct">
        <header className="addProduct--header">
          <h2 className="addProduct--header__title">добавить изделия</h2>
          <button className="addProduct--header__btn" onClick={hideHandler}>
            <img src="close.svg" alt="close" />
          </button>
        </header>
        <div className="addProduct--check">
          <AddGender setGenderName={setGenderName} />
          <AddCategory setCategoryName={setCategoryName} />
        </div>
        <AddSubCategory setSubCategoryName={setSubCategoryName} />
        <form className="addProduct--form" onSubmit={submitHandler}>
          <div className="addProduct--about">
            <div className="addProduct--about__photo">
              <AddPhoto setPhoto={setPhoto} />
            </div>
            <div className="addProduct--about__text">
              <AddTextPart setTextPart={setTextPart} />
            </div>
          </div>
          <button className="addProduct--btn">добавить</button>
        </form>
      </div>
    </div>
  );
};
export default AddProduct;
