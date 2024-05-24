import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import hero1 from "../../assets/icons/lg/hero1.png";
import hero1Webp from "../../assets/icons/lg/hero1.webp";
import hero2 from "../../assets/icons/lg/hero2.png";
import hero2Webp from "../../assets/icons/lg/hero2.webp";
import hero3 from "../../assets/icons/lg/hero3.png";
import hero3Webp from "../../assets/icons/lg/hero3.webp";
import hero4 from "../../assets/icons/lg/hero5.png";
import hero4Webp from "../../assets/icons/lg/hero5.webp";
import hero5 from "../../assets/icons/lg/hero4.png";
import hero5Webp from "../../assets/icons/lg/hero4.webp";
import smHero1 from "../../assets/icons/lg/small-screen/sm-hero1.png";
import smHero1Webp from "../../assets/icons/lg/small-screen/sm-hero1.webp";
import smHero2 from "../../assets/icons/lg/small-screen/sm-hero2.png";
import smHero2Webp from "../../assets/icons/lg/small-screen/sm-hero2.webp";
import smHero3 from "../../assets/icons/lg/small-screen/sm-hero3.png";
import smHero3Webp from "../../assets/icons/lg/small-screen/sm-hero3.webp";
import smHero4 from "../../assets/icons/lg/small-screen/sm-hero4.png";
import smHero4Webp from "../../assets/icons/lg/small-screen/sm-hero4.webp";
import smHero5 from "../../assets/icons/lg/small-screen/sm-hero5.png";
import smHero5Webp from "../../assets/icons/lg/small-screen/sm-hero5.webp";
import accountNavIcon from "../../assets/icons/menu-account.svg";
import { useTranslation } from "react-i18next";

export function SectionHero() {
  const { t } = useTranslation();
  const [selectedBtn, setSelectedBtn] = useState(0);
  function carouselBtnHandler(e) {
    setSelectedBtn(+e.currentTarget.name);
  }
  const imgRef = useRef();
  const imgWidth = imgRef.current ? imgRef.current.clientWidth : 0;
  const navRef = useRef();
  const carouselContent = [
    { img: [hero1, smHero1, hero1Webp, smHero1Webp], alt: "iPhone 14 Series" },
    { img: [hero2, smHero2, hero2Webp, smHero2Webp], alt: "PlayStation 5" },
    { img: [hero3, smHero3, hero3Webp, smHero3Webp], alt: "Speakers" },
    { img: [hero4, smHero4, hero4Webp, smHero4Webp], alt: "Perfume" },
    { img: [hero5, smHero5, hero5Webp, smHero5Webp], alt: "Music Player" },
  ];
  // Manage secondary navigation
  function toggleNavHandler() {
    navRef.current.classList.toggle("account_navigate--visible");
  }
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        // if user click outside the nav
        !event.target.closest(".account_navigate") &&
        !event.target.closest(".menu-secondary")
      ) {
        // Close the nav
        navRef.current.classList.remove("account_navigate--visible");
      }
    }
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Change src off hero image on small screen
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 592); // Adjust the threshold as needed
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Check on initial render
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="home_hero container mb-14">
      <button
        className="menu-secondary"
        onClick={toggleNavHandler}
        name="categories-menue"
      >
        <img src={accountNavIcon} alt="menu icon" />
      </button>

      <nav ref={navRef} className="hero_nav account_navigate">
        <ul className="hero_navlist">
          <li>
            <Link className="hero_subNav" to="/products">
              {t("Woman’s Fashion")}
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
              {t("Men’s Fashion")}
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
            <Link to="/products">{t("Electronics")}</Link>
          </li>
          <li>
            <Link to="/products">{t("Home & Lifestyle")}</Link>
          </li>
          <li>
            <Link to="/products">{t("Medicine")}</Link>
          </li>
          <li>
            <Link to="/products">{t("Sports & Outdoor")}</Link>
          </li>
          <li>
            <Link to="/products">{t("Baby’s & Toys")}</Link>
          </li>
          <li>
            <Link to="/products">{t("Groceries & Pets")}</Link>
          </li>
          <li>
            <Link to="/products">{t("Health & Beauty")}</Link>
          </li>
        </ul>
      </nav>

      <div className="hero_carousel">
        <div className="hero_carousel_imgs" ref={imgRef}>
          {carouselContent.map((obj, index) => {
            return (
              <picture
                key={JSON.stringify(obj)}
                style={{
                  transform: `translateX(-${imgWidth * selectedBtn}px)`,
                }}
              >
                <source
                  srcSet={isSmallScreen ? obj.img[3] : obj.img[2]}
                  type="image/webp"
                />
                <img
                  src={isSmallScreen ? obj.img[1] : obj.img[0]}
                  alt={obj.alt}
                />
              </picture>
            );
          })}
          <Link to="products">
            <span className="shopNowLink">{t("Shop Now")}</span>
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
                aria-label={`move to image number ${index + 1}`}
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
