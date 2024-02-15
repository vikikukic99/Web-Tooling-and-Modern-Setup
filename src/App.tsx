import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './HomePage'
import NavBar from './NavBar'
import AboutPage from './AboutPage'
import MenuPage from './MenuPage'
import TestimonialPage from './Testimonial'
import BookTablePage from './BookTablePage'
import ContactPage from './ContactPage'

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/testimonial">Testimonial</Link> 
            </li>
            <li>
              <Link to="/bookTable">Book a table</Link> 
            </li>
            <li>
              <Link to="/contact">Contact</Link> 
            </li>
          </ul>
        </nav> */}
        <div>
          <NavBar />
          <HomePage />
        </div>

        <AboutPage />
        <MenuPage />
        <TestimonialPage />
        <BookTablePage />
        <ContactPage />
        {/* <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/menu" element={<MenuPage/>}/>
          <Route path="/testimonial" element={<TestimonialPage/>} />
          <Route path="/bookTable" element={<BookTablePage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes> */}
      </div>
    </Router>
  )
}

export default App
