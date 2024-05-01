import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";

export function HeaderNavigation() {
  const { user } = useContext(UserContext);

  function headerNavHandler(e) {}
  return (
    <nav>
      <ul className="header_nav">
        <li>
          <NavLink to="/" className="header_navLink" onClick={headerNavHandler}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="header_navLink"
            onClick={headerNavHandler}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="header_navLink"
            onClick={headerNavHandler}
          >
            About
          </NavLink>
        </li>
        {!user ? (
          <li>
            <NavLink
              to="/signup"
              className="header_navLink"
              onClick={headerNavHandler}
            >
              Sign Up
            </NavLink>
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
}
