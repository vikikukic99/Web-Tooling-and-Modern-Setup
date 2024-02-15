import React from 'react'

// Define a type for the menu item for better type checking
type MenuItemProps = {
  title: string
  price: string
  description: string
  imageUrl: string
}

// Create a component for a single menu item
const MenuItem: React.FC<MenuItemProps> = ({
  title,
  price,
  description,
  imageUrl,
}) => {
  return (
    <div style={{ margin: '1rem', textAlign: 'center' }}>
      <img
        src={imageUrl}
        alt={title}
        style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
      />
      <h3>{title}</h3>
      <span style={{ fontWeight: 'bold', color: '#555' }}>${price}</span>
      <p style={{ color: '#777' }}>{description}</p>
      <button
        style={{
          padding: '10px',
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
  )
}

// MenuPage component with a grid of menu items
const MenuPage: React.FC = () => {
  // Dummy data for menu items
  const menuItems: MenuItemProps[] = [
    {
      title: 'French Toast',
      price: '20',
      description:
        'Join us for the perfect breakfast experience and indulge in our delightful French Toast Meal.',
      imageUrl:
        'https://podravkaiovariations.blob.core.windows.net/030d604a-6408-11eb-a40f-0242ac12005d/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1024x768-f2b21802-64bc-11eb-a115-0242ac130010.webp',
    },
    {
      title: 'fsedfsedft',
      price: '20',
      description:
        'Join us for the perfect breakfast experience and indulge in our delightful French Toast Meal.',
      imageUrl:
        'https://podravkaiovariations.blob.core.windows.net/030d604a-6408-11eb-a40f-0242ac12005d/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1024x768-f2b21802-64bc-11eb-a115-0242ac130010.webp',
    },
    {
      title: 'fsefsft',
      price: '20',
      description:
        'Join us for the perfect breakfast experience and indulge in our delightful French Toast Meal.',
      imageUrl:
        'https://podravkaiovariations.blob.core.windows.net/030d604a-6408-11eb-a40f-0242ac12005d/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1024x768-f2b21802-64bc-11eb-a115-0242ac130010.webp',
    },
    {
      title: 'Fvdfvsfr',
      price: '20',
      description:
        'Join us for the perfect breakfast experience and indulge in our delightful French Toast Meal.',
      imageUrl:
        'https://podravkaiovariations.blob.core.windows.net/030d604a-6408-11eb-a40f-0242ac12005d/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1024x768-f2b21802-64bc-11eb-a115-0242ac130010.webp',
    },
    // ... more items
  ]

  return (
    <section id="menu">
      <div style={{ padding: '2rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Menu</h2>
        <blockquote style={{ textAlign: 'center', fontStyle: 'italic' }}>
          “Cooking is like love, either give in or don't get into it.”
        </blockquote>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1rem',
          }}
        >
          {menuItems.map((item) => (
            <MenuItem key={item.title} {...item} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#84BD98',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Explore menu
          </button>
        </div>
      </div>
    </section>
  )
}

export default MenuPage
