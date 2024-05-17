import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Loading, ReviewPdt } from "../components";

export function ReviewsPage() {
  const { t } = useTranslation();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    setReviews(JSON.parse(localStorage.getItem("userReviews")) || []);
  }, []);
  return (
    <div className="wishlist_wrapper container mb-14">
      {reviews ? (
        <>
          <div className="wishlist_header">
            <p>
              {t("Reviews")} ({reviews.length})
            </p>
          </div>
          <ul className="pdtList mb-8">
            {reviews.map((obj) => {
              return (
                <ReviewPdt
                  key={obj.id}
                  id={obj.id}
                  rating={obj.rating}
                  img={obj.img}
                />
              );
            })}
          </ul>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
