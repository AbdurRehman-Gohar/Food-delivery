import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../context/Storecontext'
const Placeorder = () => {
   const { getTotalCartAmount } = useContext(StoreContext)
  return (
    <form className='Place-order'>
       <div className="place-order-left">
        <p className="tittle">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="text" placeholder='Email'/>
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone'/>
       </div>
       <div className="place-order-right">
       <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')} >Proceed To CheckOut</button>
        </div>
       </div>
    </form>
  )
}

export default Placeorder