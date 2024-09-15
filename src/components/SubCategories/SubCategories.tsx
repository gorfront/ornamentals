import { useEffect } from "react";
import "./SubCategories.scss";
import SubCategory from "./SubCategory";
import PlusBtn from "../PlusBtn/PlusBtn";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import {
  selectSubCategory,
  toggleActiveSubCategory,
} from "../../store/slices/subCategoriesSlice/subCategoriesSlice";
import { fetchSubCategory } from "../../store/slices/subCategoriesSlice/subCategoriesAPI";
import { AddCategory } from "../AddCategory/AddCategory";
import { NewProduct } from "../Header/Header";

export interface ShowProps extends AddCategory, NewProduct {
  setShow: React.Dispatch<React.SetStateAction<string>>;
  show: string;
}

const SubCategories: React.FC<ShowProps> = ({
  setShow,
  show,
  showCategory,
  setShowCategory,
  showNewProduct,
  setShowNewProduct,
}) => {
  const subCategories = useAppSelector(selectSubCategory);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSubCategory());
  }, [dispatch]);

  const handleToggleActive = (id: string) => {
    dispatch(toggleActiveSubCategory(id));
  };

  return (
    <div className="subCategories">
      <ul className="subCategories--list">
        {subCategories.map((category) => (
          <SubCategory
            key={category.id}
            active={category.active}
            name={category.name}
            toggleActive={() => handleToggleActive(category.id)}
          />
        ))}
      </ul>
      <PlusBtn
        show={show}
        setShow={setShow}
        showCategory={showCategory}
        setShowCategory={setShowCategory}
        showNewProduct={showNewProduct}
        setShowNewProduct={setShowNewProduct}
        type="subcategories"
      />
    </div>
  );
};

export default SubCategories;
