import { getPokemonsFromApi } from './api';
import React, { useEffect, useState } from "react";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Refactored code
    getPokemonsFromApi()
      .then((data) => setPokemons(data.results))
      .catch((e) => setError(true));
  }, []);

  return error ? (
    <p>Unable to fetch data</p>
  ) : (
    <table>
      <tbody>
        {pokemons.map((pokemon) => (
          <tr role="row" key={pokemon.name}>
            <td>{pokemon.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default PokemonList;