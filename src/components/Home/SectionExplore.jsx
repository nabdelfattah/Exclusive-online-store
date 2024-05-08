import { useState } from "react";
import { HomeHeader } from "./HomeHeader";
import { Link } from "react-router-dom";
import { ProductList } from "../Product";

export function SectionExplore({ products }) {
  const [productIndex, setProductIndex] = useState(0);

  function arrowPreviousHandler() {
    setProductIndex((index) => {
      if (index == 0) return products.length - 1;
      return index - 1;
    });
  }
  function arrowNextHandler() {
    setProductIndex((index) => {
      if (index == products.length - 1) return 0;
      return index + 1;
    });
  }
  return (
    <section className="section-explore container mb-14">
      <HomeHeader subheading="Our Products" heading="Explore Our Products">
        <div className="btn-arr-wrapper">
          <button className="btn-arr" onClick={arrowPreviousHandler}>
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
          <button className="btn-arr" onClick={arrowNextHandler}>
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
      <ProductList products={products.slice(0, 5)} />
      <ProductList products={products.slice(5)} />
      <Link to="products" className="btn-primary">
        View All Products
      </Link>
    </section>
  );
}
