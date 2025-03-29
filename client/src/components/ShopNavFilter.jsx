import React from 'react'
import { ChevronDown, Filter } from 'lucide-react'

function ShopNavFilter() {
  return (
    <div className='w-full h-[90px] px-14 py-6 bg-black text-white'>
       <div className='flex items-center justify-between mb-6'>
              <h1 className='text-2xl font-bold'>Thxmn Skate</h1> 
              <div className='items-center flex gap-4'>
                     <button className='flex items-center gap-2 border px-4 py-2 rounded '>
                            <Filter size={16} /> Hide Filter
                     </button>
                     <button className='flex items-center gap-2 border px-4 py-2 rounded'>
                            Sort By<ChevronDown size={16}/>
                     </button>
              </div>  
       </div>
    </div>
  )
}

export default ShopNavFilter