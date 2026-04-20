import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from './page'

// Mock next/link
vi.mock('next/link', () => {
  return {
    default: ({ children, href }: { children: React.ReactNode, href: string }) => (
      <a href={href}>{children}</a>
    ),
  }
})

test('Home page renders correctly', () => {
  render(<Home />)
  expect(screen.getByRole('heading', { level: 1, name: /Where AI Models Find/i })).toBeDefined()
  expect(screen.getByText(/The world's first wellness platform/i)).toBeDefined()
})
