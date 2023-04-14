import React from "react";
import logo from "../assets/images.png";
import azadi from "../assets/azadi-moh.jpg";
import G20 from "../assets/G20-logo.webp";
import logo2 from '../assets/img.jpg'
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
import "./header.css";
function Header() {
  return (
    <>
      <div className="header">
      <div className="mainLogo">
        <img className="logo1" src={logo} alt="logo" />
      </div>
      <div className="subLogo">
       
       <div> <img className="logo2" src={azadi} alt="logo" /> </div>
        <div><img className="logo3" src={G20} alt="g20" /></div>
     
        
         <div className="navItems">
            <ul className="list">
            <li>Contact Us</li>
            <li>Login</li>
            <li>side</li>
            </ul>
            <img className="logo4" src={logo2} alt="logo2" />
        </div>
      </div>
    </div>
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
            <li><MdFlight /></li>
            <li><FaHotel /></li>
            <li><FaBusAlt /></li>
            <li><MdAirlineSeatReclineExtra /></li>
            <li><BsTrainFreightFrontFill /></li>
            <li><FaHandHoldingMedical /></li>
            <li><GiBookmarklet /></li>
            <li><GiCruiser /></li>
            <li><GiIndianPalace /></li>
            <li><GiElephantHead /></li>
          </ul>
        </div>
     </div>
    </>
  );
}

export default Header;
