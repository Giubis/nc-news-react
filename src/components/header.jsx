import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>NC News</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
