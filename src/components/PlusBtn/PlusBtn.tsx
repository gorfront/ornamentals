import { AddCategory } from "../AddCategory/AddCategory";
import { ShowProps } from "../SubCategories/SubCategories";
import "./PlusBtn.scss";

interface PlusBtnProps extends ShowProps, AddCategory {
  type: "categories" | "subcategories";
}

const PlusBtn: React.FC<PlusBtnProps> = ({
  setShow,
  setShowCategory,
  type,
}) => {
  const handleClick = () => {
    if (type === "categories") {
      setShowCategory("flex");
      setShow("none");
    } else if (type === "subcategories") {
      setShow("flex");
      setShowCategory("none");
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
