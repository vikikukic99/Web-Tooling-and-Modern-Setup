import React from 'react'
import './HomePage.css'

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <header>
        <h1>Welcome to Mulino</h1>
        <p>For the love of delicious food and coffee</p>
        <button>Make a table reservation</button>
      </header>
      {/* ... other homepage content */}
    </div>
  )
}

export default HomePage
