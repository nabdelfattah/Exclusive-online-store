import { useContext, useEffect, useRef } from "react";
import { Breadcrumb } from "../components";
import { UserContext } from "../UserContext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import accountNavIcon from "../assets/icons/menu-account.svg";
import { useTranslation } from "react-i18next";

export function AccountPage() {
  const { t } = useTranslation();
  const { user } = useContext(UserContext);
  const navigateTo = useNavigate();
  const accountNavRef = useRef();

  useEffect(() => {
    if (!user) {
      navigateTo("/login");
      return;
    }
  });

  const breadcrumb = [
    { route: "/", text: "Home" },
    { route: "/account", text: "My Account" },
  ];

  function toggleAccountNavHandler() {
    accountNavRef.current.classList.toggle("account_navigate--visible");
  }
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        // if user click outside the nav
        !event.target.closest(".account_navigate") &&
        !event.target.closest(".menu-secondary")
      ) {
        // Close the nav
        accountNavRef.current.classList.remove("account_navigate--visible");
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      {user ? (
        <>
          <div className="account_header container">
            <Breadcrumb chain={breadcrumb} />
            <p className="account_username">
              {t("Welcome!")}{" "}
              <span style={{ color: "#db4444" }}> {user.displayName}</span>
            </p>
          </div>
          <div className="account_wrapper mb-14 container">
            <button
              className="menu-secondary"
              onClick={toggleAccountNavHandler}
              aria-label="account-navigation-button"
            >
              <img src={accountNavIcon} alt="menu icon" />
            </button>
            <div className="account_navigate" ref={accountNavRef}>
              <nav className="account_nav">
                <Link className="account_nav_link" to="/account">
                  {t("Manage My Account")}
                </Link>
                <ul className="account_nav_list">
                  <li>
                    <NavLink className="account_nav_subLink" to="/account">
                      {t("My Profile")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="account_nav_subLink"
                      to="/account/address"
                    >
                      {t("Address Book")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="account_nav_subLink"
                      to="/account/payment"
                    >
                      {t("My Payment Options")}
                    </NavLink>
                  </li>
                </ul>
                <Link className="account_nav_link" to="/account/orders">
                  {t("My Orders")}
                </Link>
                <ul className="account_nav_list">
                  <li>
                    <NavLink
                      className="account_nav_subLink"
                      to="/account/returns"
                    >
                      {t("My Returns")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="account_nav_subLink"
                      to="/account/cancellations"
                    >
                      {t("My Cancellations")}
                    </NavLink>
                  </li>
                </ul>
                <Link className="account_nav_link" to="/wishlist">
                  {t("My WishList")}
                </Link>
              </nav>
            </div>
            <form className="account_form">
              <h3 className="account_form_heading">{t("Edit Your Profile")}</h3>
              <div className="form_item">
                <label className="label">{t("First Name")}</label>
                <input
                  className="input"
                  type="text"
                  name="fname"
                  placeholder="Md"
                />
              </div>
              <div className="form_item">
                <label className="label">{t("Last Name")}</label>
                <input
                  className="input"
                  type="text"
                  name="lname"
                  placeholder="Rimel"
                />
              </div>
              <div className="form_item">
                <label className="label">{t("Email")}</label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="rimel1111@gmail.com"
                />
              </div>
              <div className="form_item">
                <label className="label">{t("Address")}</label>
                <input
                  className="input"
                  type="text"
                  name="address"
                  placeholder="Kingston, 5236, United State"
                />
              </div>
              <div className="form_item">
                <label className="label" htmlFor="change-password">
                  {t("Change Password")}
                </label>
                <input
                  className="input mb"
                  type="password"
                  id="current-password"
                  name="current-password"
                  placeholder={t("Current Password")}
                  required
                />
                <input
                  className="input mb"
                  type="password"
                  id="new-password"
                  name="new-password"
                  placeholder={t("New Password")}
                  required
                />
                <input
                  className="input"
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  placeholder={t("Confirm New Password")}
                  required
                />
              </div>
              <div className="account_form_buttons">
                <button type="button" name="cancel-button">
                  {t("Cancel")}
                </button>
                <button className="btn-primary" name="save-changes-button">
                  {t("Save Changes")}
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
