import { useState } from 'react'
import './index.css'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import CommingSoon from './components/CommingSoon'
import ShopePage from './pages/ShopePage'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/comingSoon' element={<CommingSoon/>}/>
        <Route path='/Shop' element={<ShopePage/>}/>
      </Routes>
    </Router>
  )
}

export default App
