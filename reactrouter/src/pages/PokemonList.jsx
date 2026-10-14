
import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";

function PokemonList() {
      const [pokemon, setPokemon] = useState([]);
   const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(
  "https://pokeapi.co/api/v2/pokemon?limit=50"
        );

        if (!response.ok) {
  throw new Error("Failed to load Pokémon.");
        }

  const data = await response.json();
        setPokemon(data.results);
     } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemon();
  }, []);

  const filteredPokemon = pokemon.filter((item) =>
    item.name.includes(search.toLowerCase())
  );
  if (loading) {
    return <p className="message">Loading Pokémon...</p>;
     }

  if (error) {
            return <p className="message">{error}</p>;
  }

  return (
    <main className="container">
      <h1 className="page-title">Explore Pokémon</h1>

      <input
           className="search-input"
         type="text"
 placeholder="Search Pokémon by name..."
 value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <div className="pokemon-grid">
        {filteredPokemon.map((item) => (
          <PokemonCard
   key={item.name}
  pokemon={item}
          />
        ))}
 </div>
     {filteredPokemon.length === 0 && (
           <p className="message">No Pokémon found.</p>
      )}
           </main>
  );
}

export default PokemonList;
