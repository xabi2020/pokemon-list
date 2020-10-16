import React from 'react';
import {PokemonListItem} from "./PokemonListItem"

const App: React.FC = () => (
  <ul>
    <PokemonListItem name="Bulbasaur"></PokemonListItem>
    <PokemonListItem name="Pikachu"></PokemonListItem>
    <PokemonListItem name="Charmander"></PokemonListItem>
  </ul>
)

export default App;