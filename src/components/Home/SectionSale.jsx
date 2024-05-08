import { useState } from "react";
import { HomeHeader } from "./HomeHeader";
import { Timer } from "./Timer";
import { ProductList } from "../Product";
import { Link } from "react-router-dom";

export function SectionSale({ products }) {
  const [productIndex, setProductIndex] = useState(0);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [previousBtnDisabled, setPreviousBtnDisabled] = useState(false);
  function arrowPreviousHandler(e) {
    setProductIndex((index) => {
      if (index == 0) {
        setPreviousBtnDisabled(true);
        return;
      }
      setPreviousBtnDisabled(false);
      return index - 1;
    });
  }
  function arrowNextHandler(e) {
    setProductIndex((index) => {
      if (index == 2) {
        setNextBtnDisabled(true);
        return;
      }
      setNextBtnDisabled(false);
      return index + 1;
    });
  }
  console.log(products);
  return (
    <section className="section-sale container mb-8">
      <HomeHeader subheading="Today’s" heading="Flash Sales">
        <Timer />
        <div className="btn-arr-wrapper">
          <button
            className="btn-arr"
            onClick={arrowPreviousHandler}
            disabled={previousBtnDisabled}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 5L4 12L11 19M4 12H20"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="btn-arr"
            onClick={arrowNextHandler}
            disabled={nextBtnDisabled}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 12H20M20 12L13 5M20 12L13 19"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </HomeHeader>
      <div
        className="home_carousel_container"
        style={{
          transform: `translateX(-${(100 * productIndex) / 5}%)`,
        }}
      >
        <ProductList products={products} />
      </div>
      <Link to="/products" className="btn-primary">
        View All Products
      </Link>
    </section>
  );
}
