import React, { useContext, } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/Storecontext'
const Fooditem = ({ id, name, price, description, image }) => {

    // const [itemcount,setitemcount]=useState(0)
    const { cartitems, addToCart, removeFromCart,url } = useContext(StoreContext)
    return (
        <div className='food-items'>
            <div className="food-items-image-contanier">
                <img src={url+"/images/"+image} className='food-items-image' alt="" />
                {!cartitems[id]
                    ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} />
                    : <div className='food-item-counter'>
                        <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="" />
                        <p>{cartitems[id]}</p>
                        <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="" />
                    </div>}
            </div>
            <div className="food-item-info">
                <div className="item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-description">
                    {description}
                </p>
                <p className='food-item-price'>
                    ${price}
                </p>
            </div>
        </div>
    )
}

export default Fooditem 