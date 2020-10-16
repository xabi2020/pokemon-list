import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe("Pokemon list", () => {
  it("has a list of pokemons including Bulbasaur", async() => {
    render(<App />)
    const bulbasaurTextElement = await screen.findByText(/Bulbasaur/i)
    expect(bulbasaurTextElement).toBeInTheDocument();
  })
})