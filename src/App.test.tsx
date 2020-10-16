import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import pokemonsData from "./fixtures/pokemons.json"

describe("Pokemon list", () => {
  it("has a list of pokemons including Bulbasaur", async() => {
    render(<App />)
    const bulbasaurTextElement = await screen.findByText(/Bulbasaur/i)
    expect(bulbasaurTextElement).toBeInTheDocument();
  })

  it("has a list of all the pokemons", async() => {
    render(<App/>)
    for (let pokemon of pokemonsData.results) {
      const pokemonTextElement = await screen.findByText(pokemon.name)
      expect(pokemonTextElement).toBeInTheDocument();
    }
  })
})