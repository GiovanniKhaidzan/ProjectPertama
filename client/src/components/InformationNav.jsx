import React from 'react'

function InformationNav() {
  return (
       <div className="w-full bg-white text-black px-7">
       <div className="flex justify-end gap-4 text-xs py-2 px-10  border-gray-300">
         <p className="cursor-pointer">Find a Store</p>
         <p className="cursor-pointer">Help</p>
         <p className="cursor-pointer">Join Us</p>
         <p className="cursor-pointer">Sign In</p>
       </div>
     </div>
  )
}

export default InformationNav