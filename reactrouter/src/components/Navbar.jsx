
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Pokédex</Link>
  <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/pokemon">Pokémon</Link>
      </div>
    </nav>
  );
}

export default Navbar;
