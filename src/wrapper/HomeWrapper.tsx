import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Categories from "../components/Categories/Categories";
import SubCategories from "../components/SubCategories/SubCategories";
import AddSubcategory from "../components/AddSubcategory/AddSubcategory";
import { useState } from "react";
import AddCategory from "../components/AddCategory/AddCategory";

interface WrapperProps {
  searchWord: string;
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
}

const HomeWrapper: React.FC<WrapperProps> = ({ searchWord, setSearchWord }) => {
  const [show, setShow] = useState("none");
  const [showCategory, setShowCategory] = useState("none");
  return (
    <>
      <AddSubcategory {...{ show, setShow }} />
      <AddCategory {...{ showCategory, setShowCategory }} />

      <Header {...{ searchWord, setSearchWord }} />
      <Categories {...{ showCategory, setShowCategory, show, setShow }} />
      <SubCategories {...{ showCategory, setShowCategory, show, setShow }} />
      <Outlet />
    </>
  );
};

export default HomeWrapper;
