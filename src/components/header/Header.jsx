import React from "react";

import { MdFlight } from 'react-icons/md';
import { FaHotel } from 'react-icons/fa';
import {FaBusAlt} from 'react-icons/fa'
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import {FaHandHoldingMedical} from 'react-icons/fa'
import {GiBookmarklet} from 'react-icons/gi'
import {GiCruiser} from 'react-icons/gi'
import {BsTrainFreightFrontFill} from 'react-icons/bs'
import {GiIndianPalace} from 'react-icons/gi'
import {GiElephantHead} from 'react-icons/gi'

// import {BrowserRouter,Routes,Route} from 'react-router-dom'
function Header() {
  return (
    <>
      {/* <div className="header">
      <div className="mainLogo">
        <img className="logo1" src={logo} alt="logo" />
      </div>
      <div className="subLogo">
       
       <div> <img className="logo2" src={azadi} alt="logo" /> </div>
        <div><img className="logo3" src={G20} alt="g20" /></div>
     
        
         <div className="navItems">
            <ul className="list">
            <li>
              <select name="" id="" style={{border:"nonenpm "}}>
              <option value="">Contact Us</option>
                <option value=""><AiTwotonePhone/> 1800110139</option>
                <option value=""><AiTwotonePhone/> 0755-6698100-4090400</option>
                <option value=""><MdEmail/>tourism@irctc.com</option>
              </select>
            </li>
            <li>Login</li>
            <li>side</li>
            </ul>
            <img className="logo4" src={logo2} alt="logo2" />
        </div>
      </div>
    </div> */}
    <div className="backImg">
    <div className="plane"></div>
        <div className="train"></div>
        <div className="bus"></div>
    </div>

    <div className="seaContainer">
        {/* <img className="sea" src={sea} alt="sea" /> */}
        <div className="cruise"></div>
    </div>

     {/* form and components section */}
     <div className="Home-Form-Section">
        <div className="container home-form-container">
          <div className="card-p">
            <form action="">
              <div className="form-in-custom"></div>
              <div className="form-in-custom1"></div>
              <div className="form-in-custom2"></div>
            </form>
          </div>
        </div>
        <div className="container-fluid nav-icon-container">
          <ul className="nav-icons-wrap CenterIconBox">
          <li><MdFlight  className="liItem"/><p>Flights</p></li>
            <li><FaHotel className="liItem"/><p>Hotels</p></li>
            <li><FaBusAlt className="liItem"/><p>Busses</p></li>
            <li><MdAirlineSeatReclineExtra className="liItem"/><p>Lounge</p></li>
            <li><BsTrainFreightFrontFill className="liItem"/><p>Buddhist Train</p></li>
            <li><FaHandHoldingMedical className="liItem"/><p>Medical Tourism</p></li>
            <li><GiBookmarklet className="liItem"/><p>TAG</p></li>
            <li><GiCruiser className="liItem"/><p>Cruisers</p></li>
            <li><GiIndianPalace className="liItem"/><p>Visit India</p></li>
            <li><GiElephantHead className="liItem"/><p>Golden Chariot</p></li>
          </ul>
        </div>
        
        <div className='inputForCont'>
          <input type='text' placeholder='Enter Origin/Destination City' className='inputText' /> 
            <select className="con1" name="sector">
              <option className="buttonsearch" value="Domestic">Domestic</option>
          <option className="buttonsearch" value="International">International</option></select>
          <button>submit</button>
          </div>
     </div>
    </>
  );
}

export default Header;
