import React from 'react'
import AllCompRoute from '../AllCompRoute'
import {AiOutlineSearch} from 'react-icons/ai'
import newdelhi from "../IRCTCComponents/bgImages/hotelImg/newdelhi.jpg"
import digha from "../IRCTCComponents/bgImages/hotelImg/digha.jpg"
import indore from "../IRCTCComponents/bgImages/hotelImg/indore.jpg"
import haridwar from "../IRCTCComponents/bgImages/hotelImg/haridwar.jpg"
import Hotels_Banner_homepage from "../IRCTCComponents/bgImages/hotelImg/Hotels_Banner_homepage.jpg"

import './hotel.css'
function Hotes() {
  return (
    <div>
      <div className='hotelBg'></div>
      <AllCompRoute/>
      <form action="" style={{width:"100%"}}>
      <div className="formcont">
        <div className='inputForCont'>
          <input type='text' placeholder='Enter City or Hotel Name' className='inputText' /> 
          <p>20/5/2023</p>
          <p>24/5/2023</p>
          <p>1 Room / 2 Guests</p>
          <button className='findbtn'>Find Hotel<AiOutlineSearch className='sicon'/></button>
          </div>
        </div>
      </form>

  {/* Popular Hotels */}
  <div className='popular-hotels'>
    <h2 style={{marginLeft:"20px",fontSize:"35px",color:"rgb(30, 2, 94)"}}>Popular Hotels</h2>
    <div className='hotImgCont'>
    <img src={newdelhi} alt="" className='hotimg'/>
    <img src={haridwar} alt="" className='hotimg'/>
    <img src={indore} alt="" className='hotimg'/>
    <img src={digha} alt="" className='hotimg'/>
    </div>
      <img src={Hotels_Banner_homepage} alt="" className='hotBanImg' />
  </div>
  <div>
    <p style={{fontSize:"30px",textAlign:"center"}}>FAQ</p>

  </div>
    </div>
  )
}

export default Hotes
