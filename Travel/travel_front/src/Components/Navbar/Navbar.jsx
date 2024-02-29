import React from 'react';
import './navbar.css';
import coa from './Assets/COA-agent-pic.png';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
import { faArrowDownAZ } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
  return (
    <>
      
        <div className='text-light'>
          <p className='bg-primary p-3 text-center para_head'><b>Get Great Deals!</b> Choose from 500+ airlines for low airfares! <a className='text-link' href="#">Explore</a></p>
        </div>
       
        <nav className="navbar navbar-expand-lg navbar-light  ">
          <a className="navbar-brand" href="#"><span className='logo-span'>Cheapoair</span></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown active p-3">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                  More Travel
                </a>
                <div className="dropdown-menu  drop">
                  <a className="dropdown-item" href="#">Flights</a>
                  <a className="dropdown-item" href="#">Hotels</a>
                  <a className="dropdown-item" href="#">Cars</a>
                  <a className="dropdown-item" href="#">Packages</a>
                  <a className="dropdown-item" href="#">Explore</a>
                </div>
              </li>
              <li className="nav-item dropdown active p-3">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                  Deals
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <ul>
                    <li><a className="dropdown-item" href="#">Top Deals</a></li>
                    <li><a className="dropdown-item" href="#">Gift Cards</a></li>
                    <li><a className="dropdown-item" href="#">Flight Deals</a></li>
                    <li><a className="dropdown-item" href="#">International Flights</a></li>
                    <li><a className="dropdown-item" href="#">Group Travels</a></li>
                    <li><a className="dropdown-item" href="#">One Way Flights</a></li>
                    <li><a className="dropdown-item" href="#">Round Trip Flights</a></li>
                  </ul>
                  <ul>
                    <li><a className="dropdown-item" href="#">Travel by Interest</a></li>
                    <li><a className="dropdown-item" href="#">Last Minute Flights</a></li>
                    <li><a className="dropdown-item" href="#">Military Travel</a></li>
                    <li><a className="dropdown-item" href="#">Senior Travel</a></li>
                    <li><a className="dropdown-item" href="#">Student Travel</a></li>
                    <li><a className="dropdown-item" href="#">Red Eye Flights</a></li>
                    <li><a className="dropdown-item" href="#">Weekend Getaways</a></li>
                  </ul>
                  <ul>
                    <li><a className="dropdown-item" href="#">Travel by Region</a></li>
                    <li><a className="dropdown-item" href="#">USA Flights</a></li>
                    <li><a className="dropdown-item" href="#">Mexico Flights</a></li>
                    <li><a className="dropdown-item" href="#">Caribbean Flights</a></li>
                    <li><a className="dropdown-item" href="#">Europe Flights</a></li>
                    <li><a className="dropdown-item" href="#">Multi City Flights</a></li>
                  </ul>
                  <ul>
                    <li><a className="dropdown-item" href="#">Travel by Price</a></li>
                    <li><a className="dropdown-item" href="#">Flights Under $199</a></li>
                    <li><a className="dropdown-item" href="#">4 Star Hotels Under $99</a></li>
                    <li><a className="dropdown-item" href="#">Business Class Flights</a></li>
                    <li><a className="dropdown-item" href="#">First Class Flights</a></li>
                    <li><a className="dropdown-item" href="#">Premium Economy Flights</a></li>
                    <li><a className="dropdown-item" href="#">Cheap Airline Tickets</a></li>
                  </ul>
                </div>
              </li>
            </ul>

            <ul className="navbar-nav m-auto">
              <li className="nav-item total active">
                <a className="nav-link total_style" href="#">
                  <img src={coa} width='50' height='50' alt="Company Logo" className='utility__phone-number-image '/>
                  <span className='utility__phone-msg pb-2'>
                    <b>91+ 9944-8971-80</b>
                    <span className='d-block travel__expert'>Speak to a travel expert</span>
                  </span>
                </a>
              </li>
              

              
              <li className="nav-item active p-3 ">
              <Link className="nav-link login-style" to='/help-list'><FontAwesomeIcon icon={faHandshakeAngle} hanging='35' width='35' className='icon-user' />
              Help</Link>
              </li>
              <li className="nav-item active p-3 ">
              <Link className="nav-link login-style" to='/create-account'>
                <FontAwesomeIcon icon={faCircleUser} hanging='35' width='35' className='icon-user' />
                Login</Link>
              </li>
              
              <li className="nav-item active p-3 ">
              <Link className="nav-link login-style" >
              <FontAwesomeIcon icon={faArrowDownAZ}  hanging='35' width='35' className='icon-user' />
              </Link>
              </li>
            </ul>

          </div>
        </nav>
      
    </>
  );
}

export default Navbar;
