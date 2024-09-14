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
import { selectGender } from "../../store/slices/genderSlice/genderSlice";
import { fetchGender } from "../../store/slices/genderSlice/genderAPI";

const Main: React.FC<{
  searchWord: string;
}> = ({ searchWord }) => {
  const gender = useAppSelector(selectGender);
  const main = useAppSelector(selectMain);
  const categories = useAppSelector(selectCategories);
  const subcategories = useAppSelector(selectSubCategory);
  const dispatch = useAppDispatch();
  const activeCategory = categories.find((el) => el.active)?.name;
  const activeSubcategory = subcategories.find((el) => el.active)?.name;
  const activeGender = gender.find((el) => el.active)?.name;

  useEffect(() => {
    dispatch(fetchMain());
    dispatch(fetchCategory());
    dispatch(fetchSubCategory());
    dispatch(fetchGender());
  }, [dispatch]);

  const filteredProduct = useMemo(() => {
    const initialProducts = main.filter((product) =>
      product.name.toLowerCase().includes(searchWord.toLowerCase())
    );

    if (activeCategory && activeSubcategory && activeGender) {
      return initialProducts
        .filter((product) => product.category.includes(activeCategory))
        .filter((product) => product.subcategory.includes(activeSubcategory))
        .filter((product) => product.gender.includes(activeGender));
    }

    if (activeCategory && activeSubcategory) {
      return initialProducts
        .filter((product) => product.category.includes(activeCategory))
        .filter((product) => product.subcategory.includes(activeSubcategory));
    }

    if (activeCategory && activeGender) {
      return initialProducts
        .filter((product) => product.category.includes(activeCategory))
        .filter((product) => product.gender.includes(activeGender));
    }

    if (activeSubcategory && activeGender) {
      return initialProducts
        .filter((product) => product.subcategory.includes(activeSubcategory))
        .filter((product) => product.gender.includes(activeGender));
    }

    if (activeGender) {
      return initialProducts.filter((product) =>
        product.gender.includes(activeGender)
      );
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
  }, [main, searchWord, activeCategory, activeSubcategory, activeGender]);

  return (
    <>
      <Filter />
      <div className="main">
        {filteredProduct.length > 0
          ? filteredProduct.map((el) => <MainItem key={el.id} {...el} />)
          : `No have products by: ${activeCategory ? activeCategory : ""} ${
              activeSubcategory ? activeSubcategory : ""
            } ${activeGender ? activeGender : ""}`}
      </div>
    </>
  );
};

export default Main;
