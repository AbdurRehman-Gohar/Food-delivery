import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../../assets/assets'
const Exploremenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt incidunt aperiam, delectus ipsa non veritatis, voluptatibus tenetur earum sed saepe assumenda iusto nihil velit deleniti laudantium cupiditate distinctio quisquam sit.</p>
            <div className="explore-menu-list">
                {menu_list.map((items, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === items.menu_name ? "All" : items.menu_name)} className="ecplore-menu-list-items" key={index}>
                            <img className={category === items.menu_name ? "active" : ""} src={items.menu_image} alt="" />
                            <p>{items.menu_name}</p>
                        </div>
                    )
                })}
            </div> 
            <hr></hr>
        </div>
    )
}

export default Exploremenu