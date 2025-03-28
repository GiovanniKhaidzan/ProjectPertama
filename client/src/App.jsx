import { useState } from 'react'
import './index.css'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import CommingSoon from './components/CommingSoon'
import { useNavigate } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/comingSoon' element={<CommingSoon/>}/>
      </Routes>
    </Router>
  )
}

export default App
