import React, { useState } from 'react'
import Headers from "../components//Headers"
import ExploreMenu from '../components/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay'
import Appdownload from '../components/Appdownload'
function Home() {
  const [category,setCategory]=useState("All")
  return (
    <div className='' > 
      <Headers/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <Appdownload/>
    </div>
  )
}

export default Home