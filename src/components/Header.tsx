import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <h1>GifMaster</h1>
      </Link>
      <Link to="/gifs/favorites">
        <p>Favorites</p>
      </Link>
    </header>
  );
};

export default Header;
