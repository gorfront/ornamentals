import "./Header.scss";

const Header: React.FC<{ searchWord: string; setSearchWord: any }> = ({
  searchWord,
  setSearchWord,
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
          <img src="search.svg" alt="serach" className="header-div_btn__img" />
        </button>
      </div>
    </header>
  );
};
export default Header;
