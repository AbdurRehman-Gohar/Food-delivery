import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/cart/Cart'
import Placeorder from './pages/Placeorder/Placeorder'
import Footer from './components/Footer/Footer'
import LoginPoupup from './components/LoginPoupup/LoginPoupup'
const App = () => {
const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPoupup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
       <Navbar setShowLogin={setShowLogin}/>
       <Routes>
        < Route path='/' element={<Home/>}  />
        < Route path='/cart' element={<Cart/>}  />
        < Route path='/order' element={<Placeorder/>}  />
       </Routes>
    </div>
    <Footer/>
    
    </>
    
   
  )
}

export default App