import React, { useState } from 'react'
import logo from "../assets/images.webp";
import azadi from "../assets/azadi-moh.jpg";
import G20 from "../assets/G20-logo.webp";
import logo2 from '../assets/img.webp'
import {AiTwotonePhone} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
// import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlineAlignLeft} from 'react-icons/ai'

import '../login/login.css'
import "./header.css";
import Login from '../login/Login';
import Register from '../login/Register';
function Navbar() {
  
    const [showPopup, setShowPopup] =useState(false);
  
    const handleLoginClick = () => {
      setShowPopup(true);
    };
  
    const handleCloseClick = () => {
      setShowPopup(false);
    };
  return (
    <div className='navbar'>
       
          <div className="header">
      <div className="mainLogo">
        <img className="logo1" src={logo} alt="logo" />
      </div>
      <div className="subLogo">
       
       <div> <img className="logo2" src={azadi} alt="logo" /> </div>
        <div><img className="logo3" src={G20} alt="g20" /></div>
     
        
         <div className="navItems">
            <ul className="list">
            <li>
              <select name="" id="" style={{border:"none",width:"110px",fontSize:"16px",cursor:"pointer",outline:"none"}}>
              <option value="">Contact Us</option>
                <option value=""><AiTwotonePhone/> <a href="tel:1800110139">1800110139</a></option>
                <option value=""><AiTwotonePhone/> 0755-6698100-4090400</option>
                <option value=""><MdEmail/>tourism@irctc.com</option>
              </select>
            </li>
            
            <li><button onClick={handleLoginClick} style={{border:"none",fontSize:"16px",background:"white",cursor:"pointer"}}>Login</button></li>
            <li style={{fontSize:"22px",fontWeight:"bolder"}}><button style={{fontSize:"22px",fontWeight:"bolder",border:"none",background:"white"}} className="sidebar"><AiOutlineAlignLeft/></button></li>
            </ul>
            <img className="logo4" src={logo2} alt="logo2" />
        </div>
      </div>
    </div>
   
      
    {showPopup && (
        <div className="popup">
          <div className="popup-content">
           <Login handleCloseClick={handleCloseClick}/>
           {/* <Register/> */}
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
