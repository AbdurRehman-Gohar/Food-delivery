import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/navbar/Header/Header'
import Exploremenu from '../../components/navbar/Exploremenu/Exploremenu'
import Fooddisplay from '../../components/navbar/Fooddispaly/Fooddisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
const Home = () => {
  const [category,setCategory]=useState("All")
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory} />
      <Fooddisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home