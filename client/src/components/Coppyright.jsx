import React from 'react'

function Coppyright() {
  return (
    <div className="w-full bg-white px-16 "> 
      <div className=" mt-6 pt-4 text-xs text-black flex justify-between px-10 py-4">
        <p>&copy; 2025 OllieMarket, Inc. All rights reserved</p>
        <div className="flex gap-4">
          <p className="cursor-pointer">Guides</p>
          <p className="cursor-pointer">Terms of Sale</p>
          <p className="cursor-pointer">Terms of Use</p>
          <p className="cursor-pointer">Nike Privacy Policy</p>
        </div>
        <p className="cursor-pointer flex items-center gap-1">
          <span>🌐</span> Indonesia
        </p>
      </div>
    </div>
  )
}

export default Coppyright
