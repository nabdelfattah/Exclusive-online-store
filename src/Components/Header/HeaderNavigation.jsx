import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { useTranslation } from "react-i18next";

export function HeaderNavigation() {
  const { user } = useContext(UserContext);
  const { t } = useTranslation();
  return (
    <nav>
      <ul className="header_nav">
        <li>
          <NavLink to="/" className="header_navLink">
            {t("Home")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="header_navLink">
            {t("Contact")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="header_navLink">
            {t("About")}
          </NavLink>
        </li>
        {!user ? (
          <li>
            <NavLink to="/signup" className="header_navLink">
              {t("Sign Up")}
            </NavLink>
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
}
