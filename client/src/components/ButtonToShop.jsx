import React from 'react'

function ButtonToShop( {Label, route, onClick}) {
  return (
       <button 
        className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold "
        onClick={() => onClick(route) }
       >
             {Label}
       </button>
       
  )
}

export default ButtonToShop