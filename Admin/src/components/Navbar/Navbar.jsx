import React from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='Navbar'>
      <img src={assets.logo} className='logo' />
      <img src={assets.profile_image} className='profile'/>
    </div>
  )
}

export default Navbar