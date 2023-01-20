import React from "react";
import Logo from './WrenchLogo.png'

const Navbar =() =>{
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-light shadow">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={Logo} alt="Bootstrap" width="30" height="24"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">HOME</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/#services" role="button"> SERVICES</a>
        </li>
          <li className="nav-item">
            <a className="nav-link" href="/#features" role="button"> FEATURES</a>
        </li>
          <li className="nav-item">
            <a className="nav-link" href="/#pricing" role="button"> PRICING</a>
        </li>
          <li className="nav-item">
            <a className="nav-link" href="/#about" role="button"> ABOUT US</a>
        </li>
          <li className="nav-item">
            <a className="nav-link" href="/#contact" role="button"> CONTACT US</a>
        </li>

      </ul>
      {/*LOGIN-REGISTER BUTTOMS*/}
      <a href="/login" className="nav-item btn btn-outline-primary ms-auto px-4 rounded-pill" role="button">LOGIN</a>
      <a href="/register" className="btn btn-outline-primary ms-2 px-4 rounded-pill" role="button">REGISTER</a>  
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;