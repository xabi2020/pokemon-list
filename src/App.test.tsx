import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders "Hello World!" text', async () => {
  render(<App />)

  const helloWorldTextElement = await screen.findByText(/Hello World!/i)

  expect(helloWorldTextElement).toBeInTheDocument()
})