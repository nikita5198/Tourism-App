import React from 'react'
import './footer.css'
import {FaFacebookF} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {FaTelegram} from "react-icons/fa"
import {FaPinterest} from "react-icons/fa"
import {FaTumblr} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import logo from "./logo.svg"
import logo1 from "./logo1.png"
import logo2 from "./logo2.png"
import logo3 from "./logo3.png"

function Footer() {
  return (
    <div>
      <div className='extraInfoContainer'>
           <div>
            <h3>Services</h3>
            <hr style={{border:"0.5px dashed aliceblue", borderStyle:"dashed"}}/>
            <ul>
                <li>Buses</li>
                <li>E-Catering</li>
                <li>E-Ticketing</li>
                <li>Flights</li>
                <li>Hotels</li>
                <li>Retiring Rooms</li>
                <li>Travel Agents</li>
                <li>Affiliate Registration</li>
            </ul>
           </div>
           <div>
            <h3>Domestic Holidays</h3>
            <hr style={{border:"0.5px dashed aliceblue", borderStyle:"dashed"}}/>
            <ul>
                <li>Agra</li>
                <li>Bangalore</li>
                <li>Chandigarth</li>
                <li>Chennai</li>
                <li>Kanyakumari</li>
                <li>Ooty</li>
                <li>Chardham</li>
                <li>Ladakh</li>
            </ul>
           </div>
           <div>
            <h3> Domestic Holidays</h3>
            <hr style={{border:"0.5px dashed aliceblue", borderStyle:"dashed"}}/>
            <ul>
                <li>Andaman</li>
                <li>Goa</li>
                <li>Gujarat</li>
                <li>Kerala</li>
                <li>Maharashtra</li>
                <li>Rajasthan</li>
            </ul>
           </div>
           <div>
            <h3>Pilgrimage Tours</h3>
            <hr style={{border:"0.5px dashed aliceblue", borderStyle:"dashed"}}/>
            <ul>
                <li>Kevadia</li>
                <li>Puri</li>
                <li>Rameswaram</li>
                <li>Shirdi</li>
                <li>Tirupati</li>
                <li>Ujjain</li>
                <li>Vaishno Devi</li>
                <li>Varanasi</li>
            </ul>
           </div>
           <div>
            <h3>Pan-India Tours</h3>
            <hr style={{border:"0.5px dashed aliceblue", borderStyle:"dashed"}}/>
            <ul>
                <li>East India</li>
                <li>West India</li>
                <li>North India</li>
                <li>South India</li>
                <li>North-East</li>
            </ul>
           </div>
           <div>
            <h3>About Us</h3>
            <hr style={{border:"0.5px dashed aliceblue", borderStyle:"dashed"}}/>
            <ul>
                <li>About Us</li>
                <li>Bharat Gaurav</li>
                <li>Travel Advisory</li>
                <li>Media Corner</li>
                <li>Gallery</li>
                <li>Sitemap</li>
                <li>Blog</li>
                <li>FAQ</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Contact Us</li>
            </ul>
           </div>
      </div>

      <div>
        <footer className='footer'>
           <div>
            <p style={{fontSize:"15px"}}>© 2022 IRCTC | All Right Reserved. <br />
Browser Support IE10 and IE11 and Chrome 5.0 <br /> and above Version</p>
           </div>
           <div className='iconContainer'>
            <FaFacebookF style={{backgroundColor:"rgb(5, 5, 92)"}} className='icon'/>
            <FaYoutube style={{backgroundColor:"#f7253e"}} className='icon'/>
            <FaInstagram style={{backgroundColor:"#ed07b7"}} className='icon'/>
            <FaLinkedin style={{backgroundColor:"#0489c2"}} className='icon'/>
            <FaTelegram style={{backgroundColor:"#0489c2"}} className='icon'/>
            <FaPinterest style={{backgroundColor:"#c20a41"}} className='icon'/>
            <FaTumblr style={{backgroundColor:"rgb(5, 5, 92)"}} className='icon'/>
            <FaTwitter style={{backgroundColor:"#26c4f0"}} className='icon'/>
            <p style={{color:"black",textAlign:"center",fontSize:"15px",marginTop:"0px",marginBottom:"5px"}}>Get Connected with us on social networks</p>
           </div>

           <div>
            <img src={logo} alt="logo" className='logos' />
            <img src={logo1} alt="logo" className='logos' />
            <img src={logo2} alt="logo" className='logos' />
            <img src={logo3} alt="logo" className='logos' />
           </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
