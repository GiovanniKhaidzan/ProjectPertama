import React from 'react'
import { handleNavigation } from '../assets/utils/navigationUtils'
import { coppyRightLinks } from '../data/footerLinks'
import { useNavigate } from 'react-router-dom'

function Coppyright() {
const navigate = useNavigate()
  return (
    <div className="w-full bg-white px-16 "> 
      <div className=" mt-6 pt-4 text-xs text-black flex justify-between px-10 py-4 ">
        <p>&copy; 2025 OllieMarket, Inc. All rights reserved</p>
        <div className="flex gap-4 mr-[160px]">
              {coppyRightLinks.map((item, index)=> (
                     <p 
                            className='cursor-pointer'
                            key={index}
                            onClick={() => handleNavigation(navigate, item.route)}
                     >{item.name}</p>
              ))}
        </div>
        <p className="cursor-pointer flex items-center gap-1">
          <span>🌐</span> Indonesia
        </p>
      </div>
    </div>
  )
}

export default Coppyright
