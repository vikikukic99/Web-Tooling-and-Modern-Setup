import React from 'react'
import { Link } from 'react-scroll'

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            data-testid="link-about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            data-testid="link-menu"
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            to="testimonial"
            spy={true}
            smooth={true}
            duration={500}
            data-testid="link-testimonial"
          >
            Testimonial
          </Link>
        </li>
        <li>
          <Link
            to="bookTable"
            spy={true}
            smooth={true}
            duration={500}
            data-testid="link-bookTable"
          >
            Book Table
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            data-testid="link-contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
