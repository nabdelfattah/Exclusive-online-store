import { useNavigate, useParams } from "react-router-dom";
import { Breadcrumb, Header, Loading } from "../components";
import { ProductList, RatingStars } from "../components/Product";
import { useEffect, useState } from "react";
import truck from "../assets/icons/truck.svg";
import rotatingArrows from "../assets/icons/rotatingArrows.svg";
import { useFetch } from "../useFetch";
import { addToCart, addToWishlist } from "../helper";
import { HomeHeader } from "../components/Home/HomeHeader";

export function DetailsPage() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top left corner of the page
  }, []);
  // Fetch Data
  const { id } = useParams();
  const pdtObj = useFetch(`https://dummyjson.com/products/${id}`);
  let breadcrumb;
  if (pdtObj) {
    breadcrumb = [
      { route: "/", text: "Account" },
      { route: "/products", text: pdtObj.category },
      { route: `/products/${id}`, text: pdtObj.title },
    ];
  }
  const [color, setColor] = useState("color1");
  const [size, setSize] = useState("M");
  const [count, setCount] = useState(1);
  const navigateTo = useNavigate();

  function decreaseCountHandler() {
    if (count == 1) return;
    else {
      setCount((prev) => prev - 1);
    }
  }
  function increaseCountHandler() {
    if (count >= pdtObj.stock) return;
    else {
      setCount((prev) => prev + 1);
    }
  }
  function buyHandler(e) {
    e.preventDefault();
    addToCart({
      id: +id,
      color,
      size,
      count,
      price: pdtObj.price,
      img: pdtObj.thumbnail,
      name: pdtObj.title,
    });
    navigateTo("/checkout");
  }
  function addToWishlistHandler() {
    addToWishlist(+id);
  }

  return (
    <>
      {pdtObj ? (
        <>
          <Breadcrumb chain={breadcrumb} />
          <section className="details_wrapper container">
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
                <RatingStars initialRating={pdtObj.rating} />
                <p className="f-sm details_rating">
                  ({pdtObj.stock}) Reviews <span>|</span>
                  <span className="details_inStock">In Stock</span>
                </p>
              </div>
              <p className="details_price">${pdtObj.price}</p>
              <p className="details_description f-sm">{pdtObj.description}</p>
              <form name="payment-form" onSubmit={buyHandler}>
                <div className="details_colors">
                  <p className="f-md">Colours:</p>
                  <div className="colors">
                    <input
                      type="radio"
                      name="color"
                      value="color1"
                      style={{ backgroundColor: "#a0bce0" }}
                      onChange={(event) => setColor(event.target.value)}
                    />
                    <input
                      type="radio"
                      name="color"
                      value="color2"
                      style={{ backgroundColor: "#e07575" }}
                      onChange={(event) => setColor(event.target.value)}
                    />
                  </div>
                </div>
                <div className="details_sizes">
                  <p className="f-md">Size:</p>
                  <div className="sizes">
                    <input
                      id="xs"
                      type="radio"
                      name="size"
                      value="XS"
                      onChange={(event) => setSize(event.target.value)}
                    />
                    <label htmlFor="xs">XS</label>

                    <input
                      id="s"
                      type="radio"
                      name="size"
                      value="S"
                      onChange={(event) => setSize(event.target.value)}
                    />
                    <label htmlFor="s">S</label>

                    <input
                      id="m"
                      type="radio"
                      name="size"
                      value="M"
                      onChange={(event) => setSize(event.target.value)}
                    />
                    <label htmlFor="m">M</label>

                    <input
                      id="l"
                      type="radio"
                      name="size"
                      value="L"
                      onChange={(event) => setSize(event.target.value)}
                    />
                    <label htmlFor="l">L</label>

                    <input
                      id="xl"
                      type="radio"
                      name="size"
                      value="XL"
                      onChange={(event) => setSize(event.target.value)}
                    />
                    <label htmlFor="xl">XL</label>
                  </div>
                </div>
                <div className="details_buy">
                  <div className="count">
                    <button type="button" onClick={decreaseCountHandler}>
                      -
                    </button>
                    <p>{count}</p>
                    <button type="button" onClick={increaseCountHandler}>
                      +
                    </button>
                  </div>
                  <button className="btn-primary" onClick={buyHandler}>
                    Buy Now
                  </button>
                  <button onClick={addToWishlistHandler} type="button">
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
              </form>
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
          </section>
          <section className="details_relatedPdts container mb-14">
            <HomeHeader subheading="Related Item" heading="" />
            <ProductList category={pdtObj.category} />
          </section>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
