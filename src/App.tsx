import React from 'react';
import {PokemonListItem} from "./PokemonListItem"
import pokemonsData from "./fixtures/pokemons.json"

const App: React.FC = () => (
  <ul>
    {pokemonsData.results.map((pokemon) => (
       <PokemonListItem key={pokemon.name} name={pokemon.name}></PokemonListItem>
    ))}
  </ul>
)

export default App;