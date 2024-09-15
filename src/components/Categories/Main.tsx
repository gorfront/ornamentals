import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import {
  selectCategories,
  toggleActiveCategory,
} from "../../store/slices/categoriesSlice/categoriesSlice";
import { fetchCategory } from "../../store/slices/categoriesSlice/categoriesAPI";

const Main: React.FC<{ showCategory: string }> = ({ showCategory }) => {
  const categories = useAppSelector(selectCategories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const handleCategoryClick = (id: string) => {
    dispatch(toggleActiveCategory(id));
  };

  return (
    <>
      {categories.map((category) => (
        <div
          key={category.id}
          className={`categoryWithPhoto-main-item ${
            category.active ? "categoryWithPhoto-main-item--active" : ""
          }`}
          onClick={() => handleCategoryClick(category.id)}
          style={{
            zIndex: showCategory === "none" && category.active ? 11 : 0,
          }}
          aria-label={category.name}
        >
          <img
            src={category.image}
            alt={category.name}
            className="categoryWithPhoto-main-item_img"
          />
          <p className="categoryWithPhoto-main-item_name">{category.name}</p>
        </div>
      ))}
    </>
  );
};

export default Main;
