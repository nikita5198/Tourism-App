import React from 'react'
import './trendingPack.css'
import tirupati from './images/Tirupati.webp'
import southIndian from './images/southIndianPackages.webp'
import nationalRall from './images/nationalRallMuseum.webp'
import indianPackage from './images/IndianPackages.webp'
import busticket from './images/busTicket.webp'
import bharatGaurav from './images/bharatGauravTrain.webp'
import hotels from './images/bookHotels.webp'
function TrendingPack() {
  return (
    <div>
      <div>
      <h1>Trending Packages</h1>
      <div className='imageContainer'>
        <img className='img1' src={tirupati} alt="" />
        <img className='img1' src={southIndian} alt="" />
        <img className='img1' src={nationalRall} alt="" />
        <img className='img1' src={indianPackage} alt="" />
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
