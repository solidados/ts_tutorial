// import { createElement } from "react";
import React from 'react';
import { Product } from './components/Product'
import { products } from "./data/products";

function App() {
  return (
    <div className='container mx-auto max-w-2xl pt-5'>

      {/* а что, если продуктов будет тысяча?! – тут нужна будет итерация! */}
      {/* <Product product={products[0]}/>
      <Product product={products[1]}/>
      <Product product={products[2]}/>
      <Product product={products[3]}/> */}

      {products.map(product => <Product product={product} key={product.id} />)}
    </div>
  )
}

export default App;
