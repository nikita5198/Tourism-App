import React, { useState } from 'react'
import './trendingPack.css'
import tirupati from './images/Tirupati.webp'
import southIndian from './images/southIndianPackages.webp'
import nationalRall from './images/nationalRallMuseum.webp'
import indianPackage from './images/IndianPackages.webp'
import busticket from './images/busTicket.webp'
import bharatGaurav from './images/bharatGauravTrain.webp'
import hotels from './images/bookHotels.webp'
const images=[tirupati,southIndian,nationalRall,indianPackage];

function TrendingPack() {
  const [page,setPage]=useState(0);
  return (
    <div>
      <div>
      <h1>Trending Packages</h1>
      <div className='imageContainer'>
        {
         images.slice(page*3,page*3+3).map((ele,ind)=>(
            <img className='img1' src={ele} alt="" />
          ))
        }
      </div>
      <div >
  <button style={{display:page===0?"none":"block"}} onClick={()=>setPage(page-1)}>&lt;</button>
  {
    [...Array(Math.floor(images.length/3))].map((ele,ind)=>
    <button onClick={()=>setPage(ind)}>{ind}</button>
    )
  }
  <button style={{display:page===Math.floor(images.length/3)-1?"none":"block"}} onClick={()=>setPage(page+1)}>&gt;</button>
 </div>
      </div>
      <div className='imageContainer'>
        <img className='img2' src={busticket} alt="" />
        <img className='img2' src={bharatGaurav} alt="" />
        <img className='img2' src={hotels} alt="" />
      </div>
    </div>
    
    
  )
}

export default TrendingPack
