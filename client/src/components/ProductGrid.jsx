import React from 'react'
import { Barang } from '../data/dummy'
import ProductCard from './ProductCard'

function ProductGrid() {
  return (
    <div className='w-3/4 p-4 grid grid-cols-3 gap-4'>
       {Barang.map((product) => (
              <ProductCard key={product.id} product={product}/>
       ))}

    </div>
  )
}

export default ProductGrid