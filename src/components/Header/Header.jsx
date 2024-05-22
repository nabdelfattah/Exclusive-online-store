import { Link } from "react-router-dom";
import { HeaderNavigation, Search, UserNavigation } from "./";
import wishlistIcon from "../../assets/icons/header/wishlist.svg";
import cartIcon from "../../assets/icons/header/cart.svg";
import menue from "../../assets/icons/menue.svg";
import close from "../../assets/icons/close.svg";
import { useContext, useEffect, useRef } from "react";
import { UserContext } from "../../UserContext";
import { useTranslation } from "react-i18next";
import { HeaderContext } from "../../HeaderContext";

export function Header() {
  const { t } = useTranslation();
  const { isSticky } = useContext(HeaderContext);
  const userIconRef = useRef();
  const userNavRef = useRef();

  const { cart, setCart, wishlist, setWishlist } = useContext(UserContext);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
    setWishlist(JSON.parse(localStorage.getItem("wishlist") || "[]"));
  }, []);

  function clickUserIconHandler() {
    userIconRef.current.classList.toggle("userIcon--selected");
    userNavRef.current.classList.toggle("showNav");
  }
  function toggleMobileNav() {
    document.body.classList.toggle("open_nav");
  }

  useEffect(() => {
    function handleClickOutsideUserNav(event) {
      if (
        // if user click outside the userIcon
        !event.target.closest(".header_userNavList") &&
        !event.target.closest(".userIcon")
      ) {
        // Close the nav
        userIconRef.current.classList.remove("userIcon--selected");
        userNavRef.current.classList.remove("showNav");
      }
    }
    window.addEventListener("click", handleClickOutsideUserNav);
    return () => {
      window.removeEventListener("click", handleClickOutsideUserNav);
    };
  }, []);

  return (
    <header className={`header-primary ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        <Link to="/" className="logo">
          Exclusive
        </Link>
        <div className="main_nav">
          <HeaderNavigation />
          <div className="header_wrapper">
            <Search />
            <div className="header_iconsWrapper">
              <Link
                className="wishlistIcon"
                to="/wishlist"
                aria-label="go to your wishlist"
              >
                <img src={wishlistIcon} alt="wishlist icon" />
                {wishlist.length ? (
                  <span className="wishlistCounter">{wishlist.length}</span>
                ) : (
                  ""
                )}
              </Link>
              <Link
                className="cartIcon"
                to="/cart"
                aria-label="go to your cart"
              >
                <img src={cartIcon} alt="cart icon" />
                {cart.length ? (
                  <span className="cartCounter">
                    {cart.reduce((acc, obj) => acc + obj.count, 0)}
                  </span>
                ) : (
                  ""
                )}
              </Link>
              <button
                className="userIcon"
                aria-label="user-icon"
                onClick={clickUserIconHandler}
              >
                <svg
                  ref={userIconRef}
                  className="userIcon"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <UserNavigation
                ref={userNavRef}
                toggleNav={clickUserIconHandler}
              />
            </div>
          </div>
        </div>
        <div className="mobileNav" onClick={toggleMobileNav}>
          <button
            className="mobileNav_btn--menue"
            name="open-mobile-navigation"
          >
            <img
              src={menue}
              alt="menue icon"
              aria-label="open the navigation"
            />
          </button>
          <button className="mobileNav_btn--close">
            <img
              src={close}
              alt="close menue icon"
              aria-label="close the navigation"
              name="close-mobile-navigation"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
