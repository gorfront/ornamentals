import { useState } from "react";

const ProductionPrice = () => {
  const [prodPriceRange, setProdPriceRange] = useState<[number, number]>([
    500, 2500,
  ]);

  const handleProdPriceChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRange = [...prodPriceRange];
    newRange[0] = Number(e.target.value);
    setProdPriceRange(newRange as [number, number]);
  };

  const handleProdPriceChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRange = [...prodPriceRange];
    newRange[1] = Number(e.target.value);
    setProdPriceRange(newRange as [number, number]);
  };
  return (
    <div className="range-filter">
      <label>Цена Производства</label>
      <div className="range-container">
        <input
          type="range"
          min="0"
          max="1000"
          value={prodPriceRange[0]}
          className="slider"
          onChange={handleProdPriceChange1}
        />
        <input
          type="range"
          min="1001"
          max="5000"
          value={prodPriceRange[1]}
          className="slider"
          onChange={handleProdPriceChange2}
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
