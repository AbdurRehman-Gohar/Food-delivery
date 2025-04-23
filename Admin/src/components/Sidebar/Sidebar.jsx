import React from 'react'
import "./Sidebar.css"
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <img src={assets.add_icon}  />
          <p>Add Items</p>
        </NavLink>
        <NavLink to='/List'className="sidebar-option">
          <img src={assets.order_icon}  />
          <p>List Items</p>
        </NavLink>
        <NavLink to='/Orders' className="sidebar-option">
          <img src={assets.order_icon}  />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar