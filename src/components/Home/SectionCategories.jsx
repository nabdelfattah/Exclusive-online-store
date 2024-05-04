import { HomeHeader } from "./HomeHeader";
import category1 from "../../assets/icons/category/Category1.svg";
import category2 from "../../assets/icons/category/Category2.svg";
import category3 from "../../assets/icons/category/Category3.svg";
import category4 from "../../assets/icons/category/Category4.svg";
import category5 from "../../assets/icons/category/Category5.svg";
import category6 from "../../assets/icons/category/Category6.svg";
import category7 from "../../assets/icons/category/Category7.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Phones", img: category1 },
  { name: "Computers", img: category2 },
  { name: "SmartWatch", img: category3 },
  { name: "Camera", img: category4 },
  { name: "HeadPhones", img: category5 },
  { name: "Gaming", img: category6 },
  { name: "Accessories", img: category7 },
];

export function SectionCategories() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  function arrowPreviousHandler() {
    setCategoryIndex((index) => {
      if (index == 0) return categories.length - 1;
      return index - 1;
    });
  }
  function arrowNextHandler() {
    setCategoryIndex((index) => {
      if (index == categories.length - 1) return 0;
      return index + 1;
    });
  }
  return (
    <section className="section-categories container mb-7">
      <HomeHeader subheading="Categories" heading="Browse By Category">
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
      <div className="categories_Wrapper">
        {categories.map((item, index) => {
          let desiredOne = [(index + categoryIndex) % categories.length];
          return (
            <Link
              to="/products"
              className="category"
              key={categories[desiredOne].name}
            >
              <img src={categories[desiredOne].img} />
              <p className="category_name">{categories[desiredOne].name}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
