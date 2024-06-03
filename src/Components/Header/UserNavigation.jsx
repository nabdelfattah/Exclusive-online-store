import { forwardRef, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import userIcon from "../../assets/icons/header/userIcon.svg";
import ordersIcon from "../../assets/icons/header/orders.svg";
import cancelIcon from "../../assets/icons/header/cancel.svg";
import starIcon from "../../assets/icons/header/star.svg";
import logoutIcon from "../../assets/icons/header/logout.svg";
import loginIcon from "../../assets/icons/header/login.svg";
import signupIcon from "../../assets/icons/header/signup.svg";
import { useTranslation } from "react-i18next";

export const UserNavigation = forwardRef((props, ref) => {
  const { user, logout } = useContext(UserContext);
  const { t } = useTranslation();
  function logoutHandler() {
    props.toggleNav();
    try {
      logout();
    } catch (err) {
      alert(err);
    }
  }
  return (
    <ul className="header_userNavList" ref={ref}>
      {user ? (
        <>
          <li>
            <Link to="/account">
              <img src={userIcon} />
              {t("Manage My Account")}
            </Link>
          </li>
          <li>
            <Link to="/account/orders">
              <img src={ordersIcon} />
              {t("My Order")}
            </Link>
          </li>
          <li>
            <Link to="/account/cancellations">
              <img src={cancelIcon} />
              {t("My Cancellations")}
            </Link>
          </li>
          <li>
            <Link to="/reviews">
              <img src={starIcon} />
              {t("My Reviews")}
            </Link>
          </li>
          <li>
            <Link to="/" onClick={logoutHandler}>
              <img src={logoutIcon} />
              {t("Log Out")}
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/signup">
              <img src={signupIcon} />
              {t("Sign Up")}
            </Link>
          </li>
          <li>
            <Link to="/login">
              <img src={loginIcon} />
              {t("Log In")}
            </Link>
          </li>
        </>
      )}
    </ul>
  );
});
UserNavigation.displayName = "UserNavigationt";
