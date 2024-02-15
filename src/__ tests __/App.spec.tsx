import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from '../App'

test('renders home page content', () => {
  render(
    <Router>
      <App />
    </Router>,
  )

  const homePageContent = screen.getByText(/Home Page Content/i)
  expect(homePageContent).toBeInTheDocument()
})

test('renders about page content after clicking about button', () => {
  render(
    <Router>
      <App />
    </Router>,
  )

  const aboutButton = screen.getByRole('button', { name: /About/i })
  aboutButton.click()

  const aboutPageContent = screen.getByText(/About Page Content/i)
  expect(aboutPageContent).toBeInTheDocument()
})

test('renders services page content after clicking services button', () => {
  render(
    <Router>
      <App />
    </Router>,
  )

  const servicesButton = screen.getByRole('button', { name: /Services/i })
  servicesButton.click()

  const servicesPageContent = screen.getByText(/Services Page Content/i)
  expect(servicesPageContent).toBeInTheDocument()
})

test('renders contact page content after clicking contact button', () => {
  render(
    <Router>
      <App />
    </Router>,
  )

  const contactButton = screen.getByRole('button', { name: /Contact/i })
  contactButton.click()

  const contactPageContent = screen.getByText(/Contact Page Content/i)
  expect(contactPageContent).toBeInTheDocument()
})
