import { useContext, useRef } from "react";
import { Breadcrumb } from "../components";
import { UserContext } from "../UserContext";
import { Link, NavLink } from "react-router-dom";
import accountNavIcon from "../assets/icons/menu-account.svg";

export function AccountPage() {
  const { user } = useContext(UserContext);
  const accountNavRef = useRef();
  const breadcrumb = [
    { route: "/", text: "Home" },
    { route: "/account", text: "My Account" },
  ];

  function toggleAccountNavHandler() {
    accountNavRef.current.classList.toggle("account_navigate--visible");
  }
  return (
    <>
      <div className="account_header container">
        <Breadcrumb chain={breadcrumb} />
        {user ? (
          <p className="account_username">
            Welcome!{" "}
            <span style={{ color: "#db4444" }}> {user.displayName}</span>
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="account_wrapper mb-14 container">
        <button className="account_nav_menu" onClick={toggleAccountNavHandler}>
          <img src={accountNavIcon} alt="menu icon" />
        </button>
        <div className="account_navigate" ref={accountNavRef}>
          <nav className="account_nav">
            <Link className="account_nav_link" to="/account">
              Manage My Account
            </Link>
            <ul className="account_nav_list">
              <li>
                <NavLink className="account_nav_subLink" to="/account">
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink className="account_nav_subLink" to="/account/address">
                  Address Book
                </NavLink>
              </li>
              <li>
                <NavLink className="account_nav_subLink" to="/account/payment">
                  My Payment Options
                </NavLink>
              </li>
            </ul>
            <Link className="account_nav_link" to="/account">
              My Orders
            </Link>
            <ul className="account_nav_list">
              <li>
                <NavLink className="account_nav_subLink" to="/account/returns">
                  My Returns
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="account_nav_subLink"
                  to="/account/cancellation"
                >
                  My Cancellations
                </NavLink>
              </li>
            </ul>
            <Link className="account_nav_link" to="/wishlist">
              My WishList
            </Link>
          </nav>
        </div>
        <form className="account_form">
          <h3 className="account_form_heading">Edit Your Profile</h3>
          <div className="form_item">
            <label className="label">First Name</label>
            <input
              className="input"
              type="text"
              name="fname"
              placeholder="Md"
            />
          </div>
          <div className="form_item">
            <label className="label">Last Name</label>
            <input
              className="input"
              type="text"
              name="lname"
              placeholder="Rimel"
            />
          </div>
          <div className="form_item">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="rimel1111@gmail.com"
            />
          </div>
          <div className="form_item">
            <label className="label">Address</label>
            <input
              className="input"
              type="text"
              name="address"
              placeholder="Kingston, 5236, United State"
            />
          </div>
          <div className="form_item">
            <label className="label" htmlFor="change-password">
              Change Password
            </label>
            <input
              className="input mb"
              type="password"
              id="current-password"
              name="current-password"
              placeholder="Current Password"
              required
            />
            <input
              className="input mb"
              type="password"
              id="new-password"
              name="new-password"
              placeholder="New Password"
              required
            />
            <input
              className="input"
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm New Password"
              required
            />
          </div>
          <div className="account_form_buttons">
            <button type="button">Cancel</button>
            <button className="btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </>
  );
}
