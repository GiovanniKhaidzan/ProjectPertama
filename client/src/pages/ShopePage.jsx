import React from 'react'
import Navbar from '../components/Navbar'
import Skate from '../assets/skate.jpeg'
import ShopNavFilter from '../components/ShopNavFilter'
import SideBar from '../components/SideBar'
import ProductGrid from '../components/ProductGrid'
import Footer from '../components/Footer'
import Coppyright from '../components/Coppyright'

function ShopePage() {
  return (
       <div>
              <Navbar/>
              <img src={Skate} alt="" className='top-[40px] pt-[30px] mx-auto w-[90%] h-[400px] object-cover mb-10'/>
              <ShopNavFilter/>
              <div className='flex'>
                     <SideBar/>
                     <ProductGrid/>
              </div>
              <Footer/>
       </div>
  )
}

export default ShopePage