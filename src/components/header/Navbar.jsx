import React, { useState } from 'react'
import logo from "../assets/images.webp";
import azadi from "../assets/azadi-moh.jpg";
import G20 from "../assets/G20-logo.webp";
import logo2 from '../assets/img.webp'
import {AiTwotonePhone} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import {AiOutlineClose} from 'react-icons/ai'

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
              <select name="" id="" style={{border:"none",width:"100px",fontSize:"16px",cursor:"pointer"}}>
              <option value="">Contact Us</option>
                <option value=""><AiTwotonePhone/> 1800110139</option>
                <option value=""><AiTwotonePhone/> 0755-6698100-4090400</option>
                <option value=""><MdEmail/>tourism@irctc.com</option>
              </select>
            </li>
            
            <li><button onClick={handleLoginClick} style={{border:"none",fontSize:"16px",background:"white",cursor:"pointer"}}>Login</button></li>
            <li>side</li>
            </ul>
            <img className="logo4" src={logo2} alt="logo2" />
        </div>
      </div>
    </div>
      
    {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <button className='closeBtn' onClick={handleCloseClick}><AiOutlineClose/></button>
           <Login/>
           {/* <Register/> */}
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
