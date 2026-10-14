
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchDetails() {
      setLoading(true);
      setError("");
      setPokemon(null);

      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
        );

        if (!response.ok) {
          throw new Error("Pokémon not found.");
        }

        const data = await response.json();
        setPokemon(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchDetails();
  }, [name]);

  if (loading) {
    return <p className="message">Loading details...</p>;
  }

  if (error) {
    return (
          <main className="container">
  <p className="message">{error}</p>
        <Link to="/pokemon" className="button">
          Back to Pokédex
        </Link>
      </main>
    );
  }

  const image =
    pokemon.sprites.other["official-artwork"].front_default;

  return (
    <main className="container">
      <Link to="/pokemon" className="back-link">
        ← Back to Pokédex
      </Link>

      <section className="detail-card">
        <div className="detail-image">
          <img src={image} alt={pokemon.name} />
        </div>

        <div className="detail-content">
          <p className="pokemon-number">
            #{String(pokemon.id).padStart(3, "0")}
          </p>

  <h1>
     {pokemon.name.charAt(0).toUpperCase() +
      pokemon.name.slice(1)}
          </h1>

          <div className="types">
     {pokemon.types.map((item) => (
      <span
      className="type-badge"
          key={item.type.name}
              >
                {item.type.name}
              </span>
            ))}
          </div>

          <div className="info-grid">
            <div>
      <span>Height</span>
         <strong>{pokemon.height / 10} m</strong>
            </div>

     <div>
              <span>Weight</span>
        <strong>{pokemon.weight / 10} kg</strong>
            </div>
          </div>

          <h2>Base Stats</h2>

  {pokemon.stats.map((item) => (
            <div className="stat-row" key={item.stat.name}>
              <span>
        {item.stat.name.replace("-", " ")}
              </span>
         <div className="stat-track">
     <div
           className="stat-fill"
          style={{
                    width: `${Math.min(
        (item.base_stat / 255) * 100,
                      100
              )}%`,
         }}
                />
              </div>

     <strong>{item.base_stat}</strong>
      </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default PokemonDetail;
