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

export interface ShowProps {
  setShow: React.Dispatch<React.SetStateAction<string>>;
  show: string;
}

const SubCategories: React.FC<ShowProps & AddCategory> = ({
  setShow,
  show,
  showCategory,
  setShowCategory,
}) => {
  const subCategories = useAppSelector(selectSubCategory);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSubCategory());
  }, []);

  const toggleActive = (id: string) => {
    dispatch(toggleActiveSubCategory(id));
  };

  return (
    <>
      <div className="subCategories">
        <ul className="subCategories--list">
          {subCategories.map((category) => (
            <SubCategory
              key={category.id}
              active={category.active}
              name={category.name}
              toggleActive={() => toggleActive(category.id)}
            />
          ))}
        </ul>
        <PlusBtn
          {...{ show, setShow, showCategory, setShowCategory }}
          type="subcategories"
        />
      </div>
    </>
  );
};

export default SubCategories;
