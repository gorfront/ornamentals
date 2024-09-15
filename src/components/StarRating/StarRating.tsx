import "./StarRating.scss";

const StarRating: React.FC = () => {
  const rating = Math.floor(Math.random() * 5) + 1;

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const isActive = index + 1 <= rating;
        return (
          <button type="button" key={index} className={isActive ? "on" : "off"}>
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
