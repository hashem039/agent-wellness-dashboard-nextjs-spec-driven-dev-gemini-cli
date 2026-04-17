import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from './page'

test('Home page renders correctly', () => {
  render(<Home />)
  expect(screen.getByRole('heading', { level: 1, name: /AgentClinic/i })).toBeDefined()
  expect(screen.getByText(/AgentClinic is open for business/i)).toBeDefined()
})
