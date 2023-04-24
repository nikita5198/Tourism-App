import React from 'react'
import './login.css'
function Login() {
  return (
    <div className='loginMainContainer'>
      <div className='loginSubContainer'>
        <button className='logButton'>NiksTourism Login</button>
        <button className='logButton'>Guest Login</button>
      </div>

        <div style={{textAlign:"center",marginBottom:"0.5rem"}}>LOGIN TO YOUR NIKS-TOURISM </div>
      <div className='loginInputContainer'>
        <label className='inputContent' htmlFor="username">User Name</label><br />
        <input className='name' type="text" placeholder='Enter Your User Name' /><br />
        <label className='inputContent' htmlFor="password">Password</label><br />
        <input className='name' type="password" placeholder='Enter Your Password' />
      </div>
      <button className='loginbtn'>LOGIN</button>
      <hr style={{margin:"1rem 2rem "}}/>
      <div style={{textAlign:"center"}}>
      Not a member? Sign UpForgot Password?
      </div>
    </div>
  )
}

export default Login
