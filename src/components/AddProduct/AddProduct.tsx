import { useRef, useState } from "react";
import AddCategory from "./AddCategory";
import AddGender from "./AddGender";
import AddPhoto from "./AddPhoto";
import "./AddProduct.scss";
import AddSubCategory from "./AddSubCategory";
import AddTextPart from "./AddTextPart";
import { useAppDispatch } from "../../utils/hooks";
import { addMain } from "../../store/slices/mainSlice/mainSlice";

interface AddProductProps {
  showNewProduct: string;
  setShowNewProduct: React.Dispatch<React.SetStateAction<string>>;
}

const AddProduct: React.FC<AddProductProps> = ({
  showNewProduct,
  setShowNewProduct,
}) => {
  const [genderName, setGenderName] = useState<string>("");
  const [categoryName, setCategoryName] = useState<string>("");
  const [subCategoryName, setSubCategoryName] = useState<string>("");
  const [photo, setPhoto] = useState<string | undefined>("");
  const [textPart, setTextPart] = useState<{ id: string; value: string }[]>([
    { id: "0", value: "" },
    { id: "1", value: "" },
  ]);
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const toggleProductVisibility = () => {
    if (ref.current) {
      ref.current.style.display = showNewProduct ? "none" : "flex";
    }
    setShowNewProduct((prev) => (prev === "flex" ? "none" : "flex"));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !categoryName ||
      !subCategoryName ||
      !genderName ||
      !textPart[1].value
    ) {
      alert("Please fill in all fields.");
      return;
    }

    dispatch(
      addMain({
        image: photo ?? "",
        price: textPart[1].value + "$",
        category: categoryName,
        subcategory: subCategoryName,
        gender: [genderName],
      })
    );

    toggleProductVisibility();
    setGenderName("");
    setCategoryName("");
    setSubCategoryName("");
    setPhoto("");
    setTextPart([
      { id: "0", value: "" },
      { id: "1", value: "" },
    ]);
  };

  return (
    <div className="back" style={{ display: showNewProduct }} ref={ref}>
      <div className="addProduct">
        <header className="addProduct--header">
          <h2 className="addProduct--header__title">добавить изделия</h2>
          <button
            className="addProduct--header__btn"
            onClick={toggleProductVisibility}
          >
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
          <button className="addProduct--btn" type="submit">
            добавить
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
