import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import {
  selectCategories,
  toggleActiveCategory,
} from "../../store/slices/categoriesSlice/categoriesSlice";
import { fetchCategory } from "../../store/slices/categoriesSlice/categoriesAPI";

const Main: React.FC<{ show: string }> = ({ show }) => {
  const categories = useAppSelector(selectCategories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  const toggleActive = (id: string) => {
    dispatch(toggleActiveCategory(id));
  };

  return (
    <>
      {categories.map((el) => (
        <div
          key={el.id}
          className={
            el.active
              ? "categoryWithPhoto-main-item categoryWithPhoto-main-item--active"
              : "categoryWithPhoto-main-item"
          }
          onClick={() => {
            toggleActive(el.id);
          }}
          style={{ zIndex: show === "none" && el.active ? 11 : 0 }}
        >
          <img
            src={el.image}
            alt={el.name}
            className="categoryWithPhoto-main-item_img"
          />
          <p className="categoryWithPhoto-main-item_name">{el.name}</p>
        </div>
      ))}
    </>
  );
};
export default Main;
