import React from "react";
import AllCompRoute from "../AllCompRoute";
import TrendingPackages from '../TrendingPackages/TrendingPack'
import FaqContainer from '../faqContainer/FAQ'
import ContactUs from "../contactus/ContactUs";
import './header.css'
function Header() {
  return (
    <div style={{marginTop:"80px"}}> 
     {/* form and components section */}
     <div>
         <div className="backImg">
    <div className="plane"></div>
        <div className="train"></div>
        <div className="bus"></div>
    </div>

    <div className="seaContainer">
        {/* <img className="sea" src={sea} alt="sea" /> */}
        <div className="cruise"></div>
    </div>
    </div>
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
        <div>
          <AllCompRoute/>
        </div>
        
        <div className="formcont">
        <div className='inputForCont'>
          <input type='text' placeholder='Enter Origin/Destination City' className='inputText' /> 
            <select className="con1" name="sector">
              <option className="buttonsearch" value="Domestic">Domestic</option>
          <option className="buttonsearch" value="International">International</option></select>
          <button className='btnStyle'>submit</button>
          </div>
        </div>
     </div>
     <TrendingPackages/>
     <FaqContainer/>
    <ContactUs/>
    </div>
  );
}

export default Header;
