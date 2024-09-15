import { WrapperProps } from "../../wrapper/HomeWrapper";
import PlusBtn from "../PlusBtn/PlusBtn";
import "./Header.scss";
import { AddCategory } from "../AddCategory/AddCategory";
import { ShowProps } from "../SubCategories/SubCategories";

export interface NewProduct {
  showNewProduct: string;
  setShowNewProduct: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<WrapperProps & AddCategory & ShowProps & NewProduct> = ({
  searchWord,
  setSearchWord,
  showCategory,
  setShowCategory,
  show,
  setShow,
  showNewProduct,
  setShowNewProduct,
}) => {
  return (
    <header className="header">
      <div className="header-div">
        <input
          type="text"
          placeholder="Поиск"
          className="header-div_input"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <button className="header-div_btn">
          <img src="search.svg" alt="Search" className="header-div_btn__img" />
        </button>
      </div>
      <div className="header--add">
        <PlusBtn
          type="newProduct"
          show={show}
          setShow={setShow}
          showCategory={showCategory}
          setShowCategory={setShowCategory}
          showNewProduct={showNewProduct}
          setShowNewProduct={setShowNewProduct}
        />
      </div>
    </header>
  );
};

export default Header;
