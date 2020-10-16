import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders "Hello World!" text', async () => {
  render(<App />)

  const helloWorldTextElement = await screen.findByText(/Hello World!/i)

  expect(helloWorldTextElement).toBeInTheDocument()
})

describe("Pokemon list", () => {
  it("has a list of pokemons including Bulbasaur", async() => {
    render(<App />)
    const bulbasaurTextElement = await screen.findByText(/Bulbasaur/i)
    expect(bulbasaurTextElement).toBeInTheDocument();
  })
})