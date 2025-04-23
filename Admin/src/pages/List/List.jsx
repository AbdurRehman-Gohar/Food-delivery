import React, { useEffect } from 'react'
import './List.css'
import axios from 'axios'
import  { useState } from 'react'
import { toast } from 'react-toastify'
const List = () => {

  const [list,setList]= useState([])
  const url = "http://localhost:4000"

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/get`)
    console.log(response.data);
    if (response.data.success) {
      setList(response.data.data)
    }
    else
    {
      toast.error("Error")
    }
  }

  const removeData = async (foodId) => {
    const response = await axios.post(`${url}/api/food/delete`,{id:foodId})   
    await fetchList()
    if (response.data.success) {
      toast.success(response.data.message)
    }
    else{
      toast.error("Error")
    }
  }
  //  to reload the page whenever the data is added
  useEffect(()=>{
    fetchList();
  },[])
  return (
    <div className='List add flex-col' >
      <p>All Food List</p>
      <div className="List-table">
        <div className="list-table-format">
          <b> Image</b>
          <b> Name</b>
          <b> Category</b>
          <b> Price</b>
          <b> Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className="list-table-format">
              <img src={`${url}/images/`+item.Image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={()=>removeData(item._id)} className='cursor'>x</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List