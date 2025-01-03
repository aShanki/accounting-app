import { render, screen } from '@testing-library/react'
import Page from './page'

describe('HomePage', () => {
  it('renders the transaction table headers', () => {
    render(<Page />)
    expect(screen.getByText('Date')).toBeInTheDocument()
    expect(screen.getByText('Amount')).toBeInTheDocument()
    expect(screen.getByText('Note')).toBeInTheDocument()
    expect(screen.getByText('Type')).toBeInTheDocument()
    expect(screen.getByText('Location')).toBeInTheDocument()
    expect(screen.getByText('Running Balance')).toBeInTheDocument()
  })

  it('displays the total balance section', () => {
    render(<Page />)
    expect(screen.getByText(/Total Balance/i)).toBeInTheDocument()
  })

  it('shows the add transaction button', () => {
    render(<Page />)
    expect(screen.getByRole('button', { name: /add transaction/i })).toBeInTheDocument()
  })
})