import React from "react";
import { MdFlight } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { FaHandHoldingMedical } from "react-icons/fa";
import { GiBookmarklet } from "react-icons/gi";
import { GiCruiser } from "react-icons/gi";
import { BsTrainFreightFrontFill } from "react-icons/bs";
import { GiIndianPalace } from "react-icons/gi";
import { GiElephantHead } from "react-icons/gi";

import Hotels from "./IRCTCComponents/Hotels";
import Bus from "./IRCTCComponents/Bus";
import Lounge from "./IRCTCComponents/Lounge";
import Cruise from "./IRCTCComponents/Cruise";
import { Routes, Route, NavLink } from "react-router-dom";
import './allComp.css'
function AllCompRoute() {
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "gold" : "white",
    };
  };
  return (
    <div>
      <Routes>
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/bus" element={<Bus />} />
        <Route path="/lounge" element={<Lounge />} />
        <Route path="/cruise" element={<Cruise />} />
      </Routes>
      <div className="container-fluid nav-icon-container">
        <ul className="nav-icons-wrap CenterIconBox">
          <li>
            <a href="https://www.air.irctc.co.in" target="blank"style={{textDecoration:"nones",color:"white"}} >
            <MdFlight className="liItem" /></a>
            <p>Flights</p>
          </li>
          <li>
            <NavLink style={navLinkStyle} to={"/hotels"}>
              <FaHotel className="liItem" />
              <p>Hotels</p>
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyle} to={"/bus"}>
              <FaBusAlt className="liItem" />
              <p>Busses</p>
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyle} to={"/lounge"}>
              <MdAirlineSeatReclineExtra className="liItem" />
              <p>Lounge</p>
            </NavLink>
          </li>
          <li>
          <a href="https://www.irctcbuddhisttrain.com/" target="blank"style={{textDecoration:"nones",color:"white"}} >

            <BsTrainFreightFrontFill className="liItem" />
            </a>
            <p>Buddhist Train</p>
          </li>
          <li>
            <FaHandHoldingMedical className="liItem" />
            <p>Medical Tourism</p>
          </li>
          <li>
            <GiBookmarklet className="liItem" />
            <p>TAG</p>
          </li>
          <li>
            <NavLink style={navLinkStyle} to={"/cruise"}>
              <GiCruiser className="liItem" />
              <p>Cruisers</p>
            </NavLink>
          </li>
          <li>
            <GiIndianPalace className="liItem" />
            <p>Visit India</p>
          </li>
          <li>
            <GiElephantHead className="liItem" />
            <p>Golden Chariot</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AllCompRoute;
