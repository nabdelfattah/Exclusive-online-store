import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";

export function HeaderNavigation() {
  const { user } = useContext(UserContext);

  return (
    <nav>
      <ul className="header_nav">
        <li>
          <NavLink to="/" className="header_navLink">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="header_navLink">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="header_navLink">
            About
          </NavLink>
        </li>
        {!user ? (
          <li>
            <NavLink to="/signup" className="header_navLink">
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
