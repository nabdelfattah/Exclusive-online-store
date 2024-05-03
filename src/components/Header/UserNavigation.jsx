import { forwardRef, useContext } from "react";
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
  const { user, setUser } = useContext(UserContext);
  function logoutHandler(e) {
    // close userNavigation
    e.currentTarget.closest("ul").previousSibling.click();
    setUser("");
  }
  return (
    <ul className="header_userNavList" ref={ref}>
      {user ? (
        <>
          <li>
            <Link to="/users/:id">
              <img src={userIcon} />
              Manage My Account
            </Link>
          </li>
          <li>
            <Link to="/users/:id">
              <img src={ordersIcon} />
              My Order
            </Link>
          </li>
          <li>
            <Link to="/users/:id">
              <img src={cancelIcon} />
              My Cancellations
            </Link>
          </li>
          <li>
            <Link to="/uses/:id">
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
