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

export const UserNavigation = forwardRef((props, ref) => {
  const { user, logout } = useContext(UserContext);

  function logoutHandler() {
    props.toggleNav();
    try {
      logout();
    } catch (err) {
      alert(err);
    }
  }

  let timeoutId;
  function leaveNavHandler() {
    clearTimeout(timeoutId); // Clear the timeout when the mouse leaves the navigation
    timeoutId = setTimeout(() => {
      props.toggleNav();
    }, 1500);
  }
  return (
    <ul
      className="header_userNavList"
      ref={ref}
      onMouseLeave={leaveNavHandler}
      onMouseEnter={() => {
        clearTimeout(timeoutId);
      }}
    >
      {user ? (
        <>
          <li>
            <Link to="/account">
              <img src={userIcon} />
              Manage My Account
            </Link>
          </li>
          <li>
            <Link to="/account">
              <img src={ordersIcon} />
              My Order
            </Link>
          </li>
          <li>
            <Link to="/account">
              <img src={cancelIcon} />
              My Cancellations
            </Link>
          </li>
          <li>
            <Link to="/account">
              <img src={starIcon} />
              My Reviews
            </Link>
          </li>
          <li>
            <Link to="/" onClick={logoutHandler}>
              <img src={logoutIcon} />
              Logout
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/signup">
              <img src={signupIcon} />
              Sign up
            </Link>
          </li>
          <li>
            <Link to="/login">
              <img src={loginIcon} />
              Log in
            </Link>
          </li>
        </>
      )}
    </ul>
  );
});
UserNavigation.displayName = "UserNavigationt";
