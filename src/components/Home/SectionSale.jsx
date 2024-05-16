import { useState } from "react";
import { HomeHeader } from "./HomeHeader";
import { Timer } from "./Timer";
import { ProductList } from "../Product";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function SectionSale() {
  const { t } = useTranslation();
  const [productIndex, setProductIndex] = useState(0);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [previousBtnDisabled, setPreviousBtnDisabled] = useState(true);

  function previousArrowHandler() {
    if (productIndex == 0) {
      setPreviousBtnDisabled(true);
    } else {
      setNextBtnDisabled(false);
      setProductIndex((previousVal) => previousVal - 1);
    }
  }
  function nextArrowHandler() {
    if (productIndex == 1) {
      setNextBtnDisabled(true);
    } else {
      setPreviousBtnDisabled(false);
      setProductIndex((previousVal) => previousVal + 1);
    }
  }
  return (
    <section className="section-sale container mb-8">
      <HomeHeader subheading={t("Today’s")} heading={t("Flash Sales")}>
        <Timer />
        <div className="btn-arr-wrapper">
          <button
            className="btn-arr"
            onClick={previousArrowHandler}
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
            onClick={nextArrowHandler}
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
          transform: `translateX(-${
            productIndex ? 27 * productIndex + 3 * productIndex : 0
          }rem)`,
        }}
      >
        <ProductList category="mens-watches" />
      </div>
      <Link to="/products" className="btn-primary">
        {t("View All Products")}
      </Link>
    </section>
  );
}
