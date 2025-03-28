import React from "react";
import { Search, Heart, ShoppingBag } from "lucide-react";

function Navbar() {
  return (
<div className="w-full">
      {/* Top Bar - Warna Putih */}
      <div className="w-full bg-white text-black px-14">
        <div className="flex justify-end gap-4 text-xs py-2 px-10 border-b border-gray-300">
          <p className="cursor-pointer">Find a Store</p>
          <p className="cursor-pointer">Help</p>
          <p className="cursor-pointer">Join Us</p>
          <p className="cursor-pointer">Sign In</p>
        </div>
      </div>

      {/* Navigation Bar - Warna Hitam */}
      <div className="w-full bg-black text-white">
        <div className="flex items-center justify-between px-10 py-4">
          {/* Left Section - Logo */}
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-bold">Ollie Mart</h3>
          </div>

          {/* Middle Section - Navigation Links */}
          <div className="hidden md:flex gap-6 text-sm font-semibold ml-[180px]">
            <p className="cursor-pointer hover:text-gray-400 transition">New & Featured</p>
            <p className="cursor-pointer hover:text-gray-400 transition">Sale</p>
            <p className="cursor-pointer hover:text-gray-400 transition">Categories</p>
          </div>

          {/* Right Section - Search & Icons */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-white rounded-full px-3 py-1 w-48">
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

        {/* Announcement Bar */}
        <div className="text-center bg-black text-white py-4 text-sm">
          <p className="font-semibold">Move, Shop, Customise & Celebrate With Us</p>
          <p className="text-gray-400">No matter what you feel like doing today, It's better as a Member.</p>
          <p className="font-semibold underline cursor-pointer hover:text-gray-400 transition">
            Join Us
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;