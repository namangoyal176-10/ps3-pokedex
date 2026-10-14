
import { Link } from "react-router-dom";
function Home() {
  return (
    <main className="hero">
      <div className="hero-content">
        <p className="eyebrow">EXPLORE THE WORLD</p>
 <h1>Discover Your Favourite Pokémon</h1>
        <p>
          Explore Pokémon, discover their types,
          and learn about their abilities and stats.
        </p>
 <Link to="/pokemon" className="button">
          Open Pokédex
 </Link>
      </div>
    </main>
  );
}

export default Home;
