import { useNavigate } from "react-router-dom";
import { Main } from "../../store/slices/mainSlice/mainSlice";
import StarRating from "../StarRating/StarRating";
import "./CurrentItem.scss";

const CurrentItem: React.FC<{ initialItem: Main | undefined }> = ({
  initialItem,
}) => {
  const navigate = useNavigate();

  return (
    <div className="currentItem">
      <button onClick={() => navigate("/")} className="currentItem--btn">
        <img src="/back.svg" alt="back" />
        <span>Back to home page</span>
      </button>
      <div className="currentItem--main">
        <div className="currentItem--main__photo">
          <img
            src={initialItem?.image || "/placeholder.jpg"}
            alt={initialItem?.name || "Item image"}
          />
        </div>
        <div className="currentItem--main__about">
          <h2 className="currentItem--main__about--title">
            {initialItem?.name || "Item Name"}
          </h2>
          <p className="currentItem--main__about--txt">
            {initialItem
              ? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusamus repudiandae voluptatum nam, aut eveniet consectetur dolor aspernatur delectus ullam nulla eaque sapiente quod veritatis facilis quasi enim laboriosam ex laudantium a, obcaecati assumenda sint eum vero? Voluptate sint odio accusantium, consequatur, odit minima dolorum ad ea nulla alias natus. Maxime velit ab praesentium molestias quo laboriosam repellat! Dignissimos corporis, hic asperiores illum consequatur laudantium cumque veniam laboriosam odio quibusdam.`
              : "Description not available."}
          </p>
          <p className="currentItem--main__about--category">
            Category: <span>{initialItem?.category[0] || "Unknown"}</span>
          </p>
          <div className="currentItem--main__about--price">
            <p className="currentItem--main__about--price--txt">
              {initialItem?.price
                ? `$${initialItem.price}`
                : "Price not available"}
            </p>
            <StarRating />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentItem;
