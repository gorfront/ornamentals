import { useNavigate } from "react-router-dom";
import "./Main.scss";
import { useAppDispatch } from "../../utils/hooks";
import { toggleActiveMain } from "../../store/slices/mainSlice/mainSlice";

interface MainProps {
  image: string;
  name: string;
  price: string;
  id: string;
}

const MainItem: React.FC<MainProps> = ({ image, name, price, id }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div
      className="main--item"
      onClick={() => {
        dispatch(toggleActiveMain(id));
        navigate(`/collection/${name}`);
      }}
    >
      <div className="main--item--img">
        <img src={image} alt={name} />
      </div>
      <div className="main--item--about">
        <p className="main--item--about--name">{name}</p>
        <p className="main--item--about--price">{price}</p>
      </div>
    </div>
  );
};
export default MainItem;
