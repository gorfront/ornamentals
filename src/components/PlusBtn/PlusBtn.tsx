import { AddCategory } from "../AddCategory/AddCategory";
import { NewProduct } from "../Header/Header";
import { ShowProps } from "../SubCategories/SubCategories";
import "./PlusBtn.scss";

interface PlusBtnProps extends ShowProps, AddCategory, NewProduct {
  type: "categories" | "subcategories" | "newProduct";
}

const PlusBtn: React.FC<PlusBtnProps> = ({
  setShow,
  setShowCategory,
  setShowNewProduct,
  type,
}) => {
  const handleClick = () => {
    if (type === "categories") {
      setShowCategory("flex");
      setShow("none");
      setShowNewProduct("none");
    } else if (type === "subcategories") {
      setShow("flex");
      setShowCategory("none");
      setShowNewProduct("none");
    } else if (type === "newProduct") {
      setShowNewProduct("flex");
      setShowCategory("none");
      setShow("none");
    }
  };

  return (
    <>
      <button className="plus" onClick={handleClick}>
        <img src="plus.svg" alt="plus" />
      </button>
    </>
  );
};

export default PlusBtn;
