import "./Filter.scss";
import { useAppSelector, useAppDispatch } from "../../utils/hooks";
import {
  selectPrice,
  setProductionPriceFrom,
  setProductionPriceTo,
  setRealPriceFrom,
  setRealPriceTo,
} from "../../store/slices/priceSlice/priceSlice";

interface Price {
  type: "realPrice" | "productionPrice";
}

const Price: React.FC<Price> = ({ type }) => {
  const dispatch = useAppDispatch();
  const allPrice = useAppSelector(selectPrice);
  const initialValue = allPrice.price;
  const realPrice = allPrice.realPrice;
  const productionPrice = allPrice.productionPrice;

  const handlePriceChange =
    (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value);
      switch (id) {
        case "from":
          type === "realPrice"
            ? dispatch(setRealPriceFrom(value))
            : dispatch(setProductionPriceFrom(value));
          break;
        case "to":
          type === "realPrice"
            ? dispatch(setRealPriceTo(value))
            : dispatch(setProductionPriceTo(value));
          break;
        default:
          break;
      }
    };

  console.log(allPrice);

  return (
    <div className="range-filter">
      <label>{type === "realPrice" ? "Цена" : "Цена производства"}</label>
      <div className="range-container">
        <input
          type="range"
          min={initialValue.minFrom}
          max={initialValue.maxFrom}
          value={
            type === "realPrice"
              ? realPrice.from ?? initialValue.from
              : productionPrice.from ?? initialValue.from
          }
          className="slider"
          onChange={handlePriceChange("from")}
        />
        <input
          type="range"
          min={initialValue.minTo}
          max={initialValue.maxTo}
          value={
            type === "realPrice"
              ? realPrice.to ?? initialValue.to
              : productionPrice.to ?? initialValue.to
          }
          className="slider"
          onChange={handlePriceChange("to")}
        />
      </div>
      <div className="price-range">
        <input
          type="number"
          value={
            type === "realPrice"
              ? realPrice.from ?? initialValue.from
              : productionPrice.from ?? initialValue.from
          }
          readOnly
          placeholder="От"
        />
        <span>–</span>
        <input
          type="number"
          value={
            type === "realPrice"
              ? realPrice.to ?? initialValue.to
              : productionPrice.to ?? initialValue.to
          }
          readOnly
          placeholder="До"
        />
      </div>
    </div>
  );
};

export default Price;
