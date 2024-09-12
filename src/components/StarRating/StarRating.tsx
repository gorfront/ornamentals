import "./StarRating.scss";

const StarRating: React.FC = () => {
  const rating = Math.floor(Math.random() * 5) + 1;
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const adjustedIndex = index + 1;
        return (
          <button
            type="button"
            key={adjustedIndex}
            className={adjustedIndex <= rating ? "on" : "off"}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
