import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/Storecontext'
const Navbar = ({ setShowLogin }) => {
  let [menu, setMenu] = useState("home")
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")


  } 
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>home</Link>
        <a href='#explore-menu' className={menu === "menu" ? "active" : ""} onClick={() => setMenu("menu")} >menu</a>
        <a href='#App-download' className={menu === "mobile-app" ? "active" : ""} onClick={() => setMenu("mobile-app")} >mobile-app</a>
        <a href='#footer' className={menu === "contact" ? "active" : ""} onClick={() => setMenu("contact")} >contact</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? <button onClick={() => setShowLogin(true)}>sign in</button> : <div className='navbar-profile'>
          <img src={assets.profile_icon} alt="" />
          <ul className="navprofile-dropdown">
            <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
            <hr />
            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>logout</p></li>
          </ul>
        </div>}

      </div>
    </div>
  )
}

export default Navbar