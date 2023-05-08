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
import Home from "../IRCTCComponents/Home";
import Hotels from "../IRCTCComponents/Hotels"
import Bus from "../IRCTCComponents/Bus";
import Lounge from "../IRCTCComponents/Lounge";
function Header() {
  return (
    <div style={{marginTop:"80px"}}>
      {/* <Home/> */}
      {/* <Hotels/> */}
      {/* <Bus/> */}
      <Lounge/>
     


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
          <button className='btnStyle'>submit</button>
          </div>
     </div>
    </div>
  );
}

export default Header;
