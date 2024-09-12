import { AddCategory } from "../AddCategory/AddCategory";
import Gender from "../Gender/Gender";
import PlusBtn from "../PlusBtn/PlusBtn";
import "./Categories.scss";
import Main from "./Main";
import { ShowProps } from "../SubCategories/SubCategories";

const Categories: React.FC<AddCategory & ShowProps> = ({
  show,
  setShow,
  showCategory,
  setShowCategory,
}) => {
  return (
    <div className="categoryWithPhoto">
      <Gender />
      <div className="categoryWithPhoto-main">
        <Main show={show} />
      </div>
      <PlusBtn
        {...{ showCategory, setShowCategory, setShow, show }}
        type="categories"
      />
    </div>
  );
};

export default Categories;
