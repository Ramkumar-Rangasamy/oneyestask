import React,{useEffect} from 'react'

import './footer.css';

//AOS imported
import AOS from 'aos';
import 'aos/dist/aos.css';

//FontAwesomeIcon imported
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter} from "@fortawesome/free-brands-svg-icons"; 
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"; 
import {faCaretRight} from "@fortawesome/free-solid-svg-icons"; 

//image upload
import pay from './Assets/footer-logo-desktop.webp';

function Footer() {

   // Initialize AOS  
  useEffect(() => {
    AOS.init(); 
  }, []);

  //every year automatically change
  const year=new Date();


  return (

    <>
     <footer id="footer" className="footer">

<div className="container mb-5">
  <div className="row gy-4">
    <div className="col-lg-5 col-md-12 footer-info pt-5">
      <a href="#" className="logo d-flex align-items-center">
        <span>Cheapoair</span>
      </a>
      <p>Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.</p>
      <div className="social-links d-flex mt-4">
        <h3 className='pr-2'>Connect with Us</h3>
        <a href="#" className="twitter "><i><FontAwesomeIcon icon={faTwitter} /></i></a>
        <a href="#" className="facebook"><i><FontAwesomeIcon icon={faFacebook} /></i></a>
        <a href="#" className="instagram"><i><FontAwesomeIcon icon={faInstagram} /></i></a>
        <a href="#" className="linkedin"><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
      </div>
    </div>

    <div className="col-lg-2 col-6 footer-links pt-5 ">
      <h4 className='quick'>Quick Links <FontAwesomeIcon icon={faCaretRight}  /></h4>
      <ul>
        <li><a href="#">Popular Airlines</a></li>
        <li><a href="#">Popular Flight Routes</a></li>
        <li><a href="#">Top U.S. Destinations</a></li>
        
        <li><a href="#">Site Directories</a></li>
        <li><a href="#">Stay Connected</a></li>
        <li><a href="#">International Sites</a></li>
      </ul>
    </div>

    <div className="col-lg-2 col-6 footer-links pt-5">
      <h4>BOOK</h4>
      <ul>
        <li><a href="#">Cheap Flights</a></li>
        <li><a href="#">Cheap Hotels</a></li>
        <li><a href="#">Car Rentals</a></li>
        <li><a href="#">Vacation Packages</a></li>
        <li><a href="#">Group Travel</a></li>
        <li><a href="#">Save & Earn $</a></li>
      </ul>
    </div>

    

    <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start pt-5">
      <h4>Contact Us</h4>
      <p>
        From Indian<br/>
        Mettupalayam<br/>
        Coimbatore 641302.<br/><br/>
        <strong>Phone :</strong> +91 9944 8971 80<br/>
        <strong>Email :</strong> info@example.com<br/>
      </p>

    </div>

  </div>
</div>

<div className='d-flex  justify-content-center align-items-center pb-5'>
    <img src={pay} className='col-lg-6 col-10' />
</div>

<div className="container">
  <div className="copyright">
     Copyright &copy; 2024 - {year.getFullYear()} Cheapoair, All Rights Reserved
  </div>
  <div className="credits">
   
    Designed by <a href="http://ramkumar-2023-portfolio.netlify.app">Ramkumar R</a>
  </div>
</div>

</footer>

    </>
  )
}

export default Footer