import React from 'react'
import { handleNavigation } from '../assets/utils/navigationUtils'
import { useNavigate } from 'react-router-dom'
import { NavLinks } from '../data/navlinks'

function InformationNav() {
const navigate = useNavigate()
  return (
       <div className="w-full bg-white text-black px-7">
       <div className="flex justify-end gap-4 text-xs py-2 px-10  border-gray-300">
              {NavLinks.map ((item, index ) => (
                     <p 
                            key ={index}
                            onClick={() => handleNavigation(navigate, item.route)}
                            className="cursor-pointer hover:text-grey-500"
                     >{item.name}</p>
              ))}
       </div>
     </div>
  )
}
              {NavLinks.map ((item, index ) => {
                     <p
                            className='cursor-pointer hover:text-grey-500'
                            key={index}
                            onClick={() => handleNavigation(navigate,item.route)}
                     >{item.name}</p>
              })}

export default InformationNav