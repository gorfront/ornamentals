import { useState } from "react";

const Price = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([500, 2500]);

  const handlePriceChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRange = [...priceRange];
    newRange[0] = Number(e.target.value);
    setPriceRange(newRange as [number, number]);
  };

  const handlePriceChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRange = [...priceRange];
    newRange[1] = Number(e.target.value);
    setPriceRange(newRange as [number, number]);
  };

  return (
    <div className="range-filter">
      <label>Цена</label>
      <div className="range-container">
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[0]}
          className="slider"
          onChange={handlePriceChange1}
        />
        <input
          type="range"
          min="1001"
          max="5000"
          value={priceRange[1]}
          className="slider"
          onChange={handlePriceChange2}
        />
      </div>
      <div className="price-range">
        <input type="number" value={priceRange[0]} readOnly placeholder="От" />
        <span>–</span>
        <input type="number" value={priceRange[1]} readOnly placeholder="До" />
      </div>
    </div>
  );
};
export default Price;
