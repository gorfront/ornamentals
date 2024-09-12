import { useEffect, useMemo } from "react";
import MainItem from "./MainItem";
import "./Main.scss";
import Filter from "../Filter/Filter";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { selectMain } from "../../store/slices/mainSlice/mainSlice";
import { selectCategories } from "../../store/slices/categoriesSlice/categoriesSlice";
import { fetchMain } from "../../store/slices/mainSlice/mainSliceAPI";
import { fetchCategory } from "../../store/slices/categoriesSlice/categoriesAPI";
import { selectSubCategory } from "../../store/slices/subCategoriesSlice/subCategoriesSlice";
import { fetchSubCategory } from "../../store/slices/subCategoriesSlice/subCategoriesAPI";

const Main: React.FC<{
  searchWord: string;
}> = ({ searchWord }) => {
  const main = useAppSelector(selectMain);
  const categories = useAppSelector(selectCategories);
  const subcategories = useAppSelector(selectSubCategory);
  const dispatch = useAppDispatch();
  const activeCategory = categories.find((el) => el.active)?.name;
  const activeSubcategory = subcategories.find((el) => el.active)?.name;

  useEffect(() => {
    dispatch(fetchMain());
    dispatch(fetchCategory());
    dispatch(fetchSubCategory());
  }, [dispatch]);

  const filteredProduct = useMemo(() => {
    const initialProducts = main.filter((product) =>
      product.name.toLowerCase().includes(searchWord.toLowerCase())
    );

    if (activeCategory && activeSubcategory) {
      return initialProducts
        .filter((product) => product.category.includes(activeCategory))
        .filter((product) => product.subcategory.includes(activeSubcategory));
    }

    if (activeCategory) {
      return initialProducts.filter((product) =>
        product.category.includes(activeCategory)
      );
    }

    if (activeSubcategory) {
      return initialProducts.filter((product) =>
        product.subcategory.includes(activeSubcategory)
      );
    }

    return initialProducts;
  }, [main, searchWord, activeCategory, activeSubcategory]);

  return (
    <>
      <Filter />
      <div className="main">
        {filteredProduct.length > 0
          ? filteredProduct.map((el) => <MainItem key={el.id} {...el} />)
          : `No products found for category: ${activeCategory}`}
      </div>
    </>
  );
};

export default Main;
