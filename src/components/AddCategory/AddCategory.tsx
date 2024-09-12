import { useRef, useState } from "react";
import data from "../../utils/db.json";
import "./AddCategory.scss";
import { useAppDispatch } from "../../utils/hooks";
import { addCategory } from "../../store/slices/categoriesSlice/categoriesSlice";

export interface AddCategory {
  showCategory: string;
  setShowCategory: React.Dispatch<React.SetStateAction<string>>;
}

const AddCategory: React.FC<AddCategory> = ({
  showCategory,
  setShowCategory,
}) => {
  const genders = data.genders;
  const [category, setCategory] = useState("");
  const [uploadPhoto, setUploadPhoto] = useState<string | null>("");
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const hideHandler = () => {
    if (ref.current) {
      ref.current.style.display = "none";
    }
    setShowCategory((prev) => (prev === "none" ? "flex" : "none"));
  };

  const handlerSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (uploadPhoto) {
      dispatch(
        addCategory({
          id: new Date().getTime().toString(),
          name: category,
          image: uploadPhoto,
          active: false,
        })
      );

      setCategory("");
      setUploadPhoto(null);
      hideHandler();
    }
  };

  return (
    <div className="back" ref={ref} style={{ display: showCategory }}>
      <div className="addCategory">
        <header className="addCategory--header">
          <h2 className="addCategory--header__title">добавить категория</h2>
          <button className="addCategory--header__btn" onClick={hideHandler}>
            <img src="close.svg" alt="close" />
          </button>
        </header>
        <div className="addCategory--gender">
          {genders.map((el) => (
            <div key={el.id} className="addCategory--gender__item">
              <img src={el.activePhoto} alt={el.name} />
              <p className="addCategory--gender__item__name">{el.name}</p>
            </div>
          ))}
        </div>
        <form className="addCategory--form" onSubmit={handlerSubmit}>
          <input
            type="text"
            placeholder="Категория"
            className="addCategory--form__txtInput"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          {uploadPhoto ? (
            <img src={uploadPhoto} alt="" />
          ) : (
            <div className="addCategory--form__img">
              <input
                type="file"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setUploadPhoto(URL.createObjectURL(e.target.files[0]));
                  }
                }}
                required
                className="addCategory--form__img--input"
              />
              <div className="addCategory--form__img--front">
                <img
                  src="photo.svg"
                  alt="photo"
                  className="addCategory--form__img--front--img"
                />
                <p className="addCategory--form__img--front--txt">
                  <span>Загрузить</span>
                  <br />
                  <span>Фото</span>
                </p>
              </div>
            </div>
          )}
          <button className="addCategory--form__btn">добавить</button>
        </form>
      </div>
    </div>
  );
};
export default AddCategory;
