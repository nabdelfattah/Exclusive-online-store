import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import hero1 from "../../assets/icons/lg/hero1.png";
import hero2 from "../../assets/icons/lg/hero2.png";
import hero3 from "../../assets/icons/lg/hero3.png";
import hero4 from "../../assets/icons/lg/hero4.png";
import hero5 from "../../assets/icons/lg/hero5.png";
import accountNavIcon from "../../assets/icons/menu-account.svg";

export function SectionHero() {
  const [selectedBtn, setSelectedBtn] = useState(0);
  function carouselBtnHandler(e) {
    setSelectedBtn(+e.currentTarget.name);
  }
  const navRef = useRef();
  const carouselContent = [
    { img: hero1, alt: "" },
    { img: hero2, alt: "" },
    { img: hero3, alt: "" },
    { img: hero4, alt: "" },
    { img: hero5, alt: "" },
  ];
  function toggleAccountNavHandler() {
    navRef.current.classList.toggle("account_navigate--visible");
  }
  return (
    <section className="home_hero container mb-14">
      <button className="menu-secondary" onClick={toggleAccountNavHandler}>
        <img src={accountNavIcon} alt="menu icon" />
      </button>
      <nav ref={navRef} className="hero_nav account_navigate">
        <ul className="hero_navlist">
          <li>
            <Link className="hero_subNav" to="/products">
              Woman’s Fashion
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z"
                  fill="black"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link className="hero_subNav" to="/products">
              Men’s Fashion
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z"
                  fill="black"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link to="/products">Electronics</Link>
          </li>
          <li>
            <Link to="/products">Home & Lifestyle</Link>
          </li>
          <li>
            <Link to="/products">Medicine</Link>
          </li>
          <li>
            <Link to="/products">Sports & Outdoor</Link>
          </li>
          <li>
            <Link to="/products">Baby’s & Toys</Link>
          </li>
          <li>
            <Link to="/products">Groceries & Pets</Link>
          </li>
          <li>
            <Link to="/products">Health & Beauty</Link>
          </li>
        </ul>
      </nav>
      <div className="hero_carousel">
        <div className="hero_carousel_imgs">
          {carouselContent.map((obj, index) => {
            return (
              <img
                key={JSON.stringify(obj)}
                src={obj.img}
                style={{
                  transform: `translateX(-${100 * selectedBtn}%)`,
                }}
              />
            );
          })}
          <Link to="products">
            <span className="shopNowLink">Shop Now</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 12H20M20 12L13 5M20 12L13 19"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className="carousel_btns">
          {Array(5)
            .fill(0)
            .map((item, index) => (
              <button
                key={index}
                className={`carousel_btn ${
                  selectedBtn == index ? "carousel_btn--selected" : ""
                }`}
                onClick={carouselBtnHandler}
                name={index}
              >
                &nbsp;
              </button>
            ))}
        </div>
      </div>
    </section>
  );
}
