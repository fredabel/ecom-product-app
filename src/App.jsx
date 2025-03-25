
import React, { useState } from 'react';
import ProductList from './ProductList';
import './styles.css'
import './App.css'

function App() {
  const [products, setProducts] = useState(
    [
      {
        id: 1,
        name: 'Gibson 1960 ',
        price: 100,
        description: '1960 was the last year for the original Les Paul™ Standard, nearly identical to a 1959 model except for a few specs.',
        category: 'Gibson',
        image: './img/gibson1.jpg'
      },
      {
        id: 2,
        name: '1968 Gibson ES-345',
        price: 200, 
        description: 'This 1968 Gibson ES-345 with a factory Bigsby is in very good condition with some playwear, finish checking, and dings. ',
        category: 'Gibson',
        image: './img/gibson2.png'
      },
      {
        id: 3,
        name: '1967 Fender Stratocaster',
        price: 300,
        description: 'A great early CBS-era Strat featuring the iconic “big” headstock! This guitar is in great shape and plays and sounds fantastic.',
        category: 'Fender',
        image: './img/fender1.png'
      },
      {
        id: 4,
        name: 'American Professional II ',
        price: 200, 
        description: 'The American Professional II Telecaster® Deluxe draws from more than sixty years of innovation, inspiration and evolution to meet the demands of today’s working player',
        category: 'Fender',
        image: './img/fender2.png'
      },
      {
        id: 5,
        name: '2010 Gretsch G5230T',
        price: 200, 
        description: 'This 2010 Gretsch G5230T Electromatic Jet is perfectly broken in with impressive resonance producing staple Gretsch tones from a pair of Filter`tron PUs that sing and interact beautifully with the chambered body! There are a few dings, general playwear, and it is missing the pickup rings but it plays great and sounds as it should. A great value! Includes gig bag. ',
        category: 'Gretsch',
        image: './img/gretsch1.png'
      },
      {
        id: 6,
        name: '2017 Gretsch G6620TFM',
        price: 200, 
        description: 'This 2017 Gretsch G6620TFM Player`s Edition Nashville is in excellent condition with hardly any evidence of handling or play.',
        category: 'Gretsch',
       image: './img/gretsch2.png'
      },
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
