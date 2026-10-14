
import { Link } from "react-router-dom";

function PokemonCard({ pokemon }) {
    const id = pokemon.url.split("/")[6];
    const image =
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
 <Link
        to={`/pokemon/${pokemon.name}`}
       className="pokemon-card"
    >
 <img src={image} alt={pokemon.name} />
<p className="pokemon-number">
         #{String(id).padStart(3, "0")}
           </p>
     <h2>
 {pokemon.name.charAt(0).toUpperCase() +
   pokemon.name.slice(1)}
      </h2>
    </Link>
  );
}

export default PokemonCard;
