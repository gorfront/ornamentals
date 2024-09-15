import { useEffect, useState } from "react";
import { selectSubCategory } from "../../store/slices/subCategoriesSlice/subCategoriesSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import "./AddProduct.scss";
import { fetchSubCategory } from "../../store/slices/subCategoriesSlice/subCategoriesAPI";

const AddSubCategory: React.FC<{
  setSubCategoryName: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setSubCategoryName }) => {
  const [activeSubCategoryId, setActiveSubCategoryId] = useState<string | null>(
    null
  );

  const subCategories = useAppSelector(selectSubCategory);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSubCategory());
  }, []);

  const toggleActive = (id: string, name: string) => {
    setActiveSubCategoryId(id);
    setSubCategoryName(name);
  };

  return (
    <ul className="addProduct--subcategories">
      {subCategories.map((subCategory) => (
        <li
          id={subCategory.id}
          className={
            subCategory.id === activeSubCategoryId
              ? "addProduct--subcategories--item addProduct--subcategories--item--active"
              : "addProduct--subcategories--item"
          }
          key={subCategory.id}
          onClick={() => toggleActive(subCategory.id, subCategory.name)}
        >
          {subCategory.name}
        </li>
      ))}
    </ul>
  );
};
export default AddSubCategory;
