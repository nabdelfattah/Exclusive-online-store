import { useState } from "react";
import { storeReview } from "../../helper";

export function RatingStars({ initialRating, id, img }) {
  const [rating, setRating] = useState(Math.round(initialRating));
  const [hover, setHover] = useState(null);

  const handleRatingChange = (currentRating) => {
    setRating(currentRating);
    storeReview({ id: id, rating: currentRating, img: img });
  };

  const handleMouseEnter = (currentRating, e) => {
    setHover(currentRating);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  return (
    <div className="ratingStars">
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              checked={currentRating === rating}
              onChange={() => handleRatingChange(currentRating)}
            />
            <span
              className="star"
              style={{
                color:
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
              }}
              onMouseEnter={() => handleMouseEnter(currentRating)}
              onMouseLeave={handleMouseLeave}
            >
              &#9733;
            </span>
          </label>
        );
      })}
    </div>
  );
}
