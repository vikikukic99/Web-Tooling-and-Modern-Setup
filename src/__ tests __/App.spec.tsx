import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from '../NavBar.tsx'
import ContactPage from '../ContactPage'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('Navbar component', () => {
  it('renders without crashing', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('contains the correct links identified by test IDs', () => {
    render(<Navbar />)
    const testIds = [
      'link-about',
      'link-menu',
      'link-testimonial',
      'link-bookTable',
      'link-contact',
    ]

    testIds.forEach((testId) => {
      expect(screen.getByTestId(testId)).toBeInTheDocument()
    })
  })

  it('allows typing into the email input', async () => {
    render(<ContactPage />)
    const emailInput = screen.getByPlaceholderText('Enter email')
    await userEvent.type(emailInput, 'test@example.com')
    expect(emailInput).toHaveValue('test@example.com')
  })

  it('logs the expected message on form submission', async () => {
    const logSpy = jest.spyOn(console, 'log')
    render(<ContactPage />)
    const emailInput = screen.getByPlaceholderText('Enter email')
    const submitButton = screen.getByText('Enter email') // This should ideally say something like "Subscribe" for clarity

    await userEvent.type(emailInput, 'test@example.com')
    fireEvent.click(submitButton)

    expect(logSpy).toHaveBeenCalledWith(
      'Subscribed with email:',
      'test@example.com',
    )
    logSpy.mockRestore()
  })
})
