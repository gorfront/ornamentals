import { useState } from "react";
import "./Filter.scss";

const ProductionPrice: React.FC = () => {
  const [prodPriceRange, setProdPriceRange] = useState<[number, number]>([
    500, 2500,
  ]);

  const handlePriceChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);
      setProdPriceRange((prevRange) => {
        const newRange = [...prevRange];
        newRange[index] = newValue;
        return newRange as [number, number];
      });
    };

  return (
    <div className="range-filter">
      <label>Цена Производства</label>
      <div className="range-container">
        <input
          type="range"
          min="0"
          max="5000"
          value={prodPriceRange[0]}
          className="slider"
          onChange={handlePriceChange(0)}
        />
        <input
          type="range"
          min={prodPriceRange[0] + 1}
          max="5000"
          value={prodPriceRange[1]}
          className="slider"
          onChange={handlePriceChange(1)}
        />
      </div>
      <div className="price-range">
        <input
          type="number"
          value={prodPriceRange[0]}
          readOnly
          placeholder="От"
        />
        <span>–</span>
        <input
          type="number"
          value={prodPriceRange[1]}
          readOnly
          placeholder="До"
        />
      </div>
    </div>
  );
};

export default ProductionPrice;
