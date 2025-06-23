import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header>
      <h1>NC News</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/topics"
              className={location.pathname === "/topics" ? "active" : ""}
            >
              Topics
            </Link>
          </li>
          <li>
            <Link
              to="/user"
              className={location.pathname === "/user" ? "active" : ""}
            >
              User
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
