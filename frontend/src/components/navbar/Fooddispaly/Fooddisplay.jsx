import React, { useContext, useState } from 'react'
import './Fooddisplay.css'
import {StoreContext} from '../../../context/Storecontext'
import Fooditem from '../../Fooditem/Fooditem'
import { Link, useNavigate } from 'react-router-dom'
const Fooddisplay = ({category}) => {
  const [name,setName]=useState("gohar")
    const {food_list}=useContext(StoreContext)
    
    
  return (
    <div className='food-dispay' id='food-display'>
        <h2 > Top dishes near you</h2>
      
       
        <div className="food-display-list">
            {food_list.map((item,index)=>{
                if(category==="All"||category===item.category){
                return ( <Fooditem key={index} name={item.name} description={item.description} id={item._id} image={item.Image} price={item.price}/>)}
                

            })}
        </div>

    </div> 
  )
}

export default Fooddisplay