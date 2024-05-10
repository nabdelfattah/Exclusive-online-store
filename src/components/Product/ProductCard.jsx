import { Link } from "react-router-dom";
import { RatingStars } from "./";
import { addToCart, addToWishlist } from "../../helper";

export function ProductCard(props) {
  const {
    id,
    title,
    price,
    discountPercentage,
    category,
    stock,
    thumbnail,
    rating,
  } = props.data;
  console.log(discountPercentage);
  function addToCartHandler() {
    addToCart({ id, color: "color1", size: "M", count: 1 });
  }
  function addToWishlistHandler() {
    addToWishlist(id);
  }
  return (
    <article className="pdt">
      <div className="pdt_imgWrapper">
        {discountPercentage >= 15 || category == "mens-watches" ? (
          <span className="discountTag tag">
            -{Math.round(discountPercentage)}%
          </span>
        ) : (
          ""
        )}
        {id % 2 == 0 && category == "laptops" ? (
          <span className="newTag tag">NEW</span>
        ) : (
          ""
        )}
        <img src={thumbnail} alt={title} />
        <button className="pdt_addToCartBtn" onClick={addToCartHandler}>
          Add To Cart
        </button>
      </div>
      <div className="pdt_textWrapper">
        <p className="pdt_title">{title}</p>
        <div className="pdt_price">
          ${price}{" "}
          {discountPercentage >= 15 ? (
            <span className="price--before">
              ${Math.round(price / (1 - discountPercentage / 100))}
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="pdt_rating_wrapper">
          <RatingStars initialRating={rating} />
          <span className="pdt_rating_num">({stock})</span>
        </div>
        <div className="card_icons">
          <button onClick={addToWishlistHandler}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17" cy="17" r="17" fill="white" />
              <path
                d="M13 10C10.7912 10 9 11.7396 9 13.8859C9 15.6185 9.7 19.7305 16.5904 23.8873C16.7138 23.961 16.8555 24 17 24C17.1445 24 17.2862 23.961 17.4096 23.8873C24.3 19.7305 25 15.6185 25 13.8859C25 11.7396 23.2088 10 21 10C18.7912 10 17 12.3551 17 12.3551C17 12.3551 15.2088 10 13 10Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <Link to={`/products/${id}`}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17" cy="17" r="17" fill="white" />
              <path
                d="M26.257 15.962C26.731 16.582 26.731 17.419 26.257 18.038C24.764 19.987 21.182 24 17 24C12.818 24 9.23601 19.987 7.74301 18.038C7.51239 17.7411 7.38721 17.3759 7.38721 17C7.38721 16.6241 7.51239 16.2589 7.74301 15.962C9.23601 14.013 12.818 10 17 10C21.182 10 24.764 14.013 26.257 15.962V15.962Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
