import React, { useState } from 'react'

const ContactPage: React.FC = () => {
  const [email, setEmail] = useState('')

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleSubscribe = (event: React.FormEvent) => {
    event.preventDefault()
    // Implement subscription logic here
    console.log('Subscribed with email:', email)
  }

  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#333',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '2rem',
      }}
    >
      <div>
        <div style={{ marginBottom: '1rem' }}>{/* Your logo here */}</div>
        <p>
          Restaurants play an important role in providing a convenient and
          enjoyable dining experience, allowing people to indulge in a variety
          of culinary delights.
        </p>
      </div>
      <div>
        <h4>Contact</h4>
        <p>Call: +381 62 9777 553</p>
        <p>Timing: Every day from 10am-10pm</p>
        <p>Address: Cara Dusana 82a, 21000 Novi Sad, Serbia</p>
      </div>
      <div>
        <h4>Subscribe</h4>
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
            style={{ margin: '0.5rem 0', padding: '0.5rem', width: '200px' }}
          />
          <button type="submit" style={{ padding: '0.5rem', width: '200px' }}>
            Enter email
          </button>
        </form>
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p>
          Copyright 2023 Cafe | All rights reserved | Designed by Violeta Kukic
        </p>
      </div>
    </section>
  )
}

export default ContactPage
