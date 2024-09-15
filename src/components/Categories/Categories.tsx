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
  showNewProduct,
  setShowNewProduct,
}) => {
  return (
    <div className="categoryWithPhoto">
      <Gender />
      <div className="categoryWithPhoto-main">
        <Main showCategory={showCategory} />
      </div>
      <PlusBtn
        {...{
          showNewProduct,
          setShowNewProduct,
          showCategory,
          setShowCategory,
          setShow,
          show,
        }}
        type="categories"
      />
    </div>
  );
};

export default Categories;
