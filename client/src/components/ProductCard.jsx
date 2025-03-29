import React from 'react'

function ProductCard({product}) {
  return (
    <div className='bg-white shadow-md p-4 rounded-lg'>
      <img src={product.image} alt={product.name} className='w-full rounded-md'/>
      <h3 className='text-lg font-semibold mt-2'>{product.name}</h3>
      <p className='text-gray-600'>{product.categories}</p>
      <p className='text-red-500 font-bold'>{product.price}</p>
    </div>
  )
}

export default ProductCard