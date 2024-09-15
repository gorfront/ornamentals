import { useEffect, useMemo } from "react";
import MainItem from "./MainItem";
import Filter from "../Filter/Filter";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { selectMain, fetchMain } from "../../store/slices/mainSlice/mainSlice";
import {
  selectCategories,
  fetchCategory,
} from "../../store/slices/categoriesSlice/categoriesSlice";
import {
  selectSubCategory,
  fetchSubCategory,
} from "../../store/slices/subCategoriesSlice/subCategoriesSlice";
import {
  selectGender,
  fetchGender,
} from "../../store/slices/genderSlice/genderSlice";
import "./Main.scss";

interface MainProps {
  searchWord: string;
}

const Main: React.FC<MainProps> = ({ searchWord }) => {
  const dispatch = useAppDispatch();
  const main = useAppSelector(selectMain);
  const categories = useAppSelector(selectCategories);
  const subcategories = useAppSelector(selectSubCategory);
  const gender = useAppSelector(selectGender);

  const activeCategory = categories.find((el) => el.active)?.name;
  const activeSubcategory = subcategories.find((el) => el.active)?.name;
  const activeGender = gender.find((el) => el.active)?.name;

  useEffect(() => {
    dispatch(fetchMain());
    dispatch(fetchCategory());
    dispatch(fetchSubCategory());
    dispatch(fetchGender());
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    const lowercasedSearchWord = searchWord.toLowerCase();

    return main.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(lowercasedSearchWord);
      const matchesCategory = activeCategory
        ? product.category.includes(activeCategory)
        : true;
      const matchesSubcategory = activeSubcategory
        ? product.subcategory.includes(activeSubcategory)
        : true;
      const matchesGender = activeGender
        ? product.gender.includes(activeGender)
        : true;

      return (
        matchesSearch && matchesCategory && matchesSubcategory && matchesGender
      );
    });
  }, [main, searchWord, activeCategory, activeSubcategory, activeGender]);

  const noProductsMessage = `No products found for: ${[
    activeCategory,
    activeSubcategory,
    activeGender,
  ]
    .filter(Boolean)
    .join(" ")}`;

  return (
    <>
      <Filter />
      <div className="main">
        {filteredProducts.length > 0
          ? filteredProducts.map((product) => (
              <MainItem key={product.id} {...product} />
            ))
          : noProductsMessage}
      </div>
    </>
  );
};

export default Main;
