import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import { Routes , Route } from "react-router-dom"
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Order from './pages/Orders/Order'
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div>
      <ToastContainer/>
     <Navbar/>
     <hr />
     <div className="app-content">
      <Sidebar/>
      <Routes>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/List' element={<List/>}></Route>
        <Route path='/Orders' element={<Order/>}></Route>
       
      </Routes>
      
     </div>
    </div>
  )
}

export default App