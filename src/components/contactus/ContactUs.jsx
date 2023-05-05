import React from 'react'
import './contactus.css'
import img from "./contactImg.webp"
import {BsSendFill} from 'react-icons/bs'
function ContactUs() {
  return (
    <div className='contactContainer'>
      <div className='imgContainer'>
        <img className='imgContainer' src={img} alt="" />
      </div>
      <div className='formContainer'>
        <form action="" >
            <h1 style={{marginBottom:"5px"}}>Contact Us</h1>
            <p>Just pack and go! Let leave your travel plan to travel experts!</p>
            <input type="text" placeholder='Your Name'/><br />
            <input type="text" placeholder='Email' /><br />
            <input type="text" placeholder='Your Phone' /><br />
            <input type="text" placeholder='Place of Origin' /><br />
            <textarea name="" id="" cols="43" rows="2">Message</textarea>
            <button className='btnStyle'>Send Now <BsSendFill/></button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs