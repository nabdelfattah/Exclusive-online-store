import { useEffect, useState } from "react";

export function RatingStars(rate) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  useEffect(() => {
    setRating(rate);
  }, []);
  return (
    <div className="ratingStars">
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onChange={() => setRating(currentRating)}
            />
            <span
              className="star"
              style={{
                color:
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
              }}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            >
              &#9733;
            </span>
          </label>
        );
      })}
    </div>
  );
}
