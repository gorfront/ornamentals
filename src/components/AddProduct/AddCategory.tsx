import { useEffect, useState } from "react";
import { selectCategories } from "../../store/slices/categoriesSlice/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { fetchCategory } from "../../store/slices/categoriesSlice/categoriesAPI";
import "./AddProduct.scss";

const AddCategory: React.FC<{
  setCategoryName: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setCategoryName }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  const categories = useAppSelector(selectCategories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  const toggleActive = (id: string, name: string) => {
    setActiveCategoryId(id);
    setCategoryName(name);
  };

  return (
    <div className="addProduct--check__category">
      {categories.map((category) => (
        <div
          id={category.id}
          key={category.id}
          className={
            activeCategoryId === category.id
              ? "addProduct--check__category__item addProduct--check__category__item__active"
              : "addProduct--check__category__item"
          }
          onClick={() => toggleActive(category.id, category.name)}
        >
          <img src={category.image} alt={category.name} />
          <p className="addProduct--check__category__item__name">
            {category.name}
          </p>
        </div>
      ))}
    </div>
  );
};
export default AddCategory;
