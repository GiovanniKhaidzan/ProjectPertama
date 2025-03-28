import React from 'react'
import { Search, Heart, ShoppingBag } from "lucide-react";
function NavbarUtama() {
  return (
       <div className="w-full bg-white text-black">
       <div className="flex items-center justify-between px-16 py-2">
         {/* Left Section - Logo */}
         <div className="flex items-center gap-4">
           <h3 className="text-lg font-bold">Ollie Mart</h3>
         </div>

         {/* Middle Section - Navigation Links */}
         <div className="hidden md:flex gap-6 text-sm font-semibold ml-[175px]">
           <p className="cursor-pointer hover:text-gray-400 transition">New & Featured</p>
           <p className="cursor-pointer hover:text-gray-400 transition">Sale</p>
           <p className="cursor-pointer hover:text-gray-400 transition">Categories</p>
         </div>

         {/* Right Section - Search & Icons */}
         <div className="flex items-center gap-4">
           <div className="hidden md:flex items-center bg-white border-1 rounded-full px-3 py-1 w-48">
             <Search size={18} className="text-black" />
             <input
               type="text"
               placeholder="Search"
               className="bg-transparent text-black outline-none px-2 w-full"
             />
           </div>
           <Heart size={22} className="cursor-pointer" />
           <ShoppingBag size={22} className="cursor-pointer" />
         </div>
       </div>
</div>
  )
}

export default NavbarUtama