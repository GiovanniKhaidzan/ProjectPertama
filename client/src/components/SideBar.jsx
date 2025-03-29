import React from 'react'

function SideBar() {
  return (
    <div className='w-1/4 p-4 border-r border-gray-300 min-h-screen'>
       <h2 className='text-lg font-bold mb-4'>Categories</h2>
       <ul className='space-y-2'>
              <li className="text-blue-600 cursor-pointer">Air Max Dn8</li>
              <li className="cursor-pointer">Air Max 1</li>
              <li className="cursor-pointer">Air Max 90</li>
              <li className="cursor-pointer">VaporMax</li>
       </ul>
    </div>
  )
}

export default SideBar