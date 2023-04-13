import React from 'react'
// import tourismLogo from '../assets/images.png'
import img from '../assets/images.png'
import azadiLogo from '../assets/azadi-moh.jpg'
import G20 from '../assets/G20-logo.webp'
import image from '../assets/img.jpg'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
<div>
<a className="navbar-brand" href="/"><img src={img} alt="Logo" width="60" height="50" className="d-inline-block align-text-top"  /></a>

  </div>  
       <div className="container">
       <img src={azadiLogo} alt="Logo" width="60" height="50" className="d-inline-block align-text-top ms-5"  />
       <img src={G20} alt="Logo" width="60" height="50" className="d-inline-block align-text-top mx-2"  />
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
         
        </ul>
        <img src={image} alt="Logo" width="60" height="50" className="d-inline-block align-text-top mx-2"  />
      </div>
    </div>
  </nav>
  )
}

export default Navbar


