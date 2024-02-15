import React from 'react'

const AboutPage: React.FC = () => {
  return (
    <section id="about">
      <div style={{ display: 'flex', flexDirection: 'row', margin: '2rem' }}>
        <div style={{ flex: 1, padding: '1rem' }}>
          {/* <img src="./images/Japanese-Soufflé-Pancakes.jpg" alt="Delicious Food Item" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} /> */}
          <img
            src="./images/burrito.jpeg"
            alt="Another Food Item"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '10px',
              marginTop: '1rem',
            }}
          />
          <img
            src="./images/French-Toast.jpg"
            alt="Tasty Dessert"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '10px',
              marginTop: '1rem',
            }}
          />
        </div>
        <div
          style={{
            flex: 2,
            padding: '1rem',
            backgroundColor: '#f5f5f5',
            borderRadius: '10px',
            marginLeft: '1rem',
          }}
        >
          <h2
            style={{
              color: '#333',
              borderBottom: '2px solid #333',
              paddingBottom: '0.5rem',
            }}
          >
            About us
          </h2>
          <p style={{ color: '#666', lineHeight: '1.5' }}>
            Welcome to our restaurant! We are a team of passionate chefs and
            food enthusiasts dedicated to providing our guests with a memorable
            dining experience. With a focus on using fresh and local ingredients
          </p>
          <p style={{ color: '#666', lineHeight: '1.5' }}>
            Our menu showcases a blend of classic favorites and innovative
            creations, ensuring there is something for everyone to enjoy.
          </p>
          <button
            style={{
              marginTop: '1rem',
              padding: '10px 20px',
              backgroundColor: '#84BD98',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Read more
          </button>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
