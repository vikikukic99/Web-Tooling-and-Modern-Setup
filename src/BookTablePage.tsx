import React, { useState } from 'react'

// Define a type for the form state
type ReservationFormState = {
  name: string
  email: string
  phoneNumber: string
  numberOfPersons: number
  date: string
  time: string
  message: string
}

const BookTablePage: React.FC = () => {
  // Form state
  const [formState, setFormState] = useState<ReservationFormState>({
    name: '',
    email: '',
    phoneNumber: '',
    numberOfPersons: 1,
    date: '',
    time: '',
    message: '',
  })

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormState({ ...formState, [name]: value })
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Submit the form data
    console.log(formState)
  }

  return (
    <section id="bookTable">
      <div style={{ padding: '2rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Reserve Your Table
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: '600px', margin: 'auto' }}
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            style={{ width: '100%', marginBottom: '1rem' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            style={{ width: '100%', marginBottom: '1rem' }}
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone number"
            onChange={handleChange}
            style={{ width: '100%', marginBottom: '1rem' }}
          />
          <input
            type="number"
            name="numberOfPersons"
            placeholder="Number of persons"
            onChange={handleChange}
            style={{ width: '100%', marginBottom: '1rem' }}
          />
          <input
            type="date"
            name="date"
            onChange={handleChange}
            style={{ width: '100%', marginBottom: '1rem' }}
          />
          <input
            type="time"
            name="time"
            onChange={handleChange}
            style={{ width: '100%', marginBottom: '1rem' }}
          />
          <textarea
            name="message"
            placeholder="Your message"
            onChange={handleChange}
            style={{ width: '100%', marginBottom: '1rem' }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#84BD98',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Book table
          </button>
        </form>
      </div>
    </section>
  )
}

export default BookTablePage
