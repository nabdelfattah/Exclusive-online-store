import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";

export function HeaderNavigation() {
  const { user } = useContext(UserContext);
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        {!user ? (
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
}
