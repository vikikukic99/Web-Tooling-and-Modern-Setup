import React from 'react'

// Define a type for the testimonial props
type TestimonialProps = {
  name: string
  message: string
  imageUrl: string
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  message,
  imageUrl,
}) => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <img
        src={imageUrl}
        alt={name}
        style={{ width: '100px', height: '100px', borderRadius: '50%' }}
      />
      <p style={{ fontStyle: 'italic' }}>{message}</p>
      <p>- {name}</p>
    </div>
  )
}

const TestimonialPage: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    // Add your testimonials here
    {
      name: 'Marija Peric',
      message:
        'Join us for the perfect breakfast experience and indulge in our delightful French Toast Meal.',
      imageUrl: '/path-to-image.jpg', // Replace with actual image path
    },
    // Repeat for each testimonial
  ]

  return (
    <section id="testimonial">
      <div style={{ backgroundColor: '#f8f8f8', padding: '20px' }}>
        <h2 style={{ textAlign: 'center' }}>Testimonials</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialPage
