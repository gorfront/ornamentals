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
    setShowCategory(type === "categories" ? "flex" : "none");
    setShow(type === "subcategories" ? "flex" : "none");
    setShowNewProduct(type === "newProduct" ? "flex" : "none");
  };

  return (
    <button className="plus" onClick={handleClick}>
      <img src="plus.svg" alt="plus" />
    </button>
  );
};

export default PlusBtn;
