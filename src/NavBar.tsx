import React from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="about" spy={true} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="menu" spy={true} smooth={true} duration={500}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="testimonial" spy={true} smooth={true} duration={500}>
            Testimonial
          </Link>
        </li>
        <li>
          <Link to="bookTable" spy={true} smooth={true} duration={500}>
            Book Table
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
