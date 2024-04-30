import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";

export function UserNavigation() {
  const { user, setUser } = useContext(UserContext);
  function logoutHandler() {
    setUser("");
  }
  return (
    <ul>
      {user ? (
        <>
          <li>
            <Link to="user/:id">Manage My Account</Link>
          </li>
          <li>
            <Link to="user/:id">My Order</Link>
          </li>
          <li>
            <Link to="user/:id">My Cancellations</Link>
          </li>
          <li>
            <Link to="/" onClick={logoutHandler}>
              Logout
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="signup">Sign up</Link>
          </li>
          <li>
            <Link to="login">Log in</Link>
          </li>
        </>
      )}
    </ul>
  );
}
