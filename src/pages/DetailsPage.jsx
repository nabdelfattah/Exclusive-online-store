import { useParams } from "react-router-dom";
import { Breadcrumb, Loading } from "../components";
import { RatingStars } from "../components/Product";
import { useState } from "react";
import truck from "../assets/icons/truck.svg";
import rotatingArrows from "../assets/icons/rotatingArrows.svg";
import { useFetch } from "../useFetch";

export function DetailsPage() {
  // Fetch Data
  const { id } = useParams();
  const url = `https://dummyjson.com/products/${id}`;
  const pdtObj = useFetch(url);
  let breadcrumb;
  if (pdtObj) {
    breadcrumb = [
      { route: "/", text: "Account" },
      { route: "/products", text: pdtObj.category },
      { route: `/products/${id}`, text: pdtObj.title },
    ];
  }
  const [count, setCount] = useState(1);

  function decreaseCountHandler() {}
  function increaseCountHandler() {}
  function buyHandler() {}
  function addToWishlistHandler() {}

  return (
    <>
      {pdtObj ? (
        <>
          <Breadcrumb chain={breadcrumb} />
          <div className="details_wrapper container">
            <div className="details_imgs">
              <figure>
                <img src={pdtObj.images[0]} alt={pdtObj.title} />
              </figure>
              <figure>
                <img src={pdtObj.thumbnail} alt={pdtObj.title} />
              </figure>
              <figure>
                <img src={pdtObj.images[1]} alt={pdtObj.title} />
              </figure>
              <figure>
                <img src={pdtObj.images[2]} alt={pdtObj.title} />
              </figure>
              <figure>
                <img src={pdtObj.images[3]} alt={pdtObj.title} />
              </figure>
            </div>
            <div className="details_details">
              <h2 className="details_title">{pdtObj.title}</h2>
              <div className="details_rating_box">
                <RatingStars rate={pdtObj.rating} />
                <p className="f-sm details_rating">
                  ({pdtObj.stock}) Reviews <span>|</span>
                  <span className="details_inStock">In Stock</span>
                </p>
              </div>
              <p className="details_price">${pdtObj.price}</p>
              <p className="details_description f-sm">{pdtObj.description}</p>
              <div className="details_colors">
                <p className="f-md">Colours:</p>
                <div className="colors">
                  <button>&nbsp;</button>
                  <button>&nbsp;</button>
                </div>
              </div>
              <div className="details_sizes">
                <p className="f-md">Size:</p>
                <div className="sizes">
                  <button>XS</button>
                  <button>S</button>
                  <button>M</button>
                  <button>L</button>
                  <button>XL</button>
                </div>
              </div>
              <div className="details_buy">
                <div className="count">
                  <button onClick={decreaseCountHandler}>-</button>
                  <span>{count}</span>
                  <button onClick={increaseCountHandler}>+</button>
                </div>
                <button className="btn-primary" onClick={buyHandler}>
                  Buy Now
                </button>
                <button onClick={addToWishlistHandler}>
                  <svg
                    className="wishlist-icon"
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="41"
                      height="41"
                      rx="4.5"
                      stroke="black"
                      strokeOpacity="0.5"
                    />
                    <path
                      d="M16 12C13.239 12 11 14.216 11 16.95C11 19.157 11.875 24.395 20.488 29.69C20.6423 29.7839 20.8194 29.8335 21 29.8335C21.1806 29.8335 21.3577 29.7839 21.512 29.69C30.125 24.395 31 19.157 31 16.95C31 14.216 28.761 12 26 12C23.239 12 21 15 21 15C21 15 18.761 12 16 12Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="details_delivary">
                <div className="details_delivary_item">
                  <img src={truck} alt="a truck" />
                  <div className="text-box">
                    <p className="title">Free Delivery</p>
                    <a className="description">
                      Enter your postal code for Delivery Availability
                    </a>
                  </div>
                </div>
                <div className="details_delivary_item">
                  <img src={rotatingArrows} alt="two rotating arrows" />
                  <div className="text-box">
                    <p className="title">Return Delivery</p>
                    <p className="description">
                      Free 30 Days Delivery Returns. <a>Details</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
