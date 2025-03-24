
import React, { useState } from 'react';
import ProductList from './ProductList';
import './styles.css'
import './App.css'

function App() {
  const [products, setProducts] = useState(
    [
      {
        id: 1,
        name: 'Apple',
        price: 100,
        description: 'This is an apple',
        category: 'Fruits',
        image: 'https://placehold.co/300x200'
        
      },
      {
        id: 2,
        name: 'Carrot',
        price: 200, 
        description: 'This is a carrot',
        category: 'Vegetables',
        image: 'https://placehold.co/300x200'
      },
      {
        id: 3,
        name: 'Chicken',
        price: 300,
        description: 'This is a chicken',
        category: 'Meat',
        image: 'https://placehold.co/300x200'
      }
    ]
  )
  
  return (
    <>
      <div>
        <div>
          <h1 className="text-center">Product List</h1>
        </div>
        <ProductList items={products} />
      </div>
    </>
  )
}

export default App
