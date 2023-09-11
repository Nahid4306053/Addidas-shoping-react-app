import React, { useState } from 'react'
import Navbar from './Navbar'
import Newses from './Newses'
import {Router, Route , Routes } from 'react-router-dom'
import CardItems from './CardItems';

export default function MainLayout() {
  const [sharedData , setSaredData] = useState();
  const shareData = (data) =>{
    setSaredData(data);
  }
  return (   
    <> 
    <Navbar  sharedData={sharedData}/>
     <Routes>
      <Route path='/' element={ <Newses shareData={shareData}/>}></Route>
      <Route path='/cart' element={ <CardItems shareData={shareData}/>}></Route>
     </Routes>
    </> 
  )
}
 