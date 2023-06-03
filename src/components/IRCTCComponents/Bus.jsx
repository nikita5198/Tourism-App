import React from 'react'
import './bus.css'
import {AiOutlineSearch} from 'react-icons/ai'
import AllCompRoute from '../AllCompRoute'
import { FaBusAlt } from "react-icons/fa";
import east from "../IRCTCComponents/bgImages/busImg/East_363x235.jpg"
import north from "../IRCTCComponents/bgImages/busImg/North_363x235.jpg"
import south from "../IRCTCComponents/bgImages/busImg/South_363x235.jpg"
import west from "../IRCTCComponents/bgImages/busImg/West_363x235.jpg"
function Bus() {
  return (
    <div>
          <div className="busbackImg">
        <div className="bus1"></div>
        <div className="bus2"></div>
         </div>
         <AllCompRoute/>
        <div style={{backgroundColor:"rgb(30, 2, 94)",border:"1px solid rgb(30, 2, 94)",paddingBottom:"20px"}}>
        <p style={{color:"white",textAlign:"center",fontSize:"35px",fontWeight:"600",marginTop:"0"}}><FaBusAlt/> Book Bus Ticket</p>
        <form action="" style={{width:"85%",backgroundColor:"white",marginLeft:"7%",borderRadius:"10px"}}>
      <div>
        <div style={{display:"flex",justifyContent:" space-between",margin:"auto 10px"}}>
          <div className='contDiv'>
          <p className='gFor'>Depart From</p>
          <p className='dFor'>Depart From</p>
          </div>
          <div className='contDiv'>
            <p className='gFor'>Going To</p>
            <p className='dFor'>Going To</p>
          </div>
          <div className='contDiv'>
          <p className='gFor'>Departure Date</p>
          <p className='dFor'>Departure Date</p>
          </div>
          <button className='busButton'>Search Bus <AiOutlineSearch style={{fontSize:"25px"}}/></button>
          </div>
        </div>
      </form>
        </div>
        <div>
          <p style={{fontSize:"30px",textAlign:"center",fontWeight:"500",color:"rgb(68, 4, 91)"}}>Trending Packages</p>
            <div className='busimgCont'>
                 <img src={east} alt="" className='busImg'/>
                 <img src={west} alt="" className='busImg'/>
                 <img src={north} alt="" className='busImg'/>
                 <img src={south} alt="" className='busImg'/>
            </div>
        </div>

        <div>
          <h3>FAQ</h3>
        </div>
    </div>
  )
}

export default Bus
