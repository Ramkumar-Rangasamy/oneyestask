import React from 'react';
import './help.css';

//image imported
import Checking from '../Navbar/Assets/Check Booking Status.jpg';
import refund from '../Navbar/Assets/flight-ticket-refund.jpg';
import Cancel from '../Navbar/Assets/Cancel.jpg';
import Dates from '../Navbar/Assets/Change-Dates.jpg';
import Booking from '../Navbar/Assets/New-Booking.jpg';
import Boarding from '../Navbar/Assets/Boarding-Pass.jpg';

const Help = () => {
  return (
    <>
      <div className='container'>
        <div className='pl-4 pt-5'>
            <h2>Need Assistance? Get the help you need online now</h2>
            <h4>Popular Topics</h4>   
        </div> 
      <div className="row row-cols-1 row-cols-md-4 p-4">

        <div className="col mb-4  col-lg-4">
          <div className="card">
            <img src={Checking} className="card-img-top" alt="Check Booking Status"/>
            <a href='#'>
              <div className="card-body">
                <h5 className="card-title">Check Booking Status?</h5>
                <p className="card-text">View your trip status online and receive confirmation.</p>
              </div>
            </a>
          </div>
        </div>

        
        <div className="col mb-4 col-lg-4">
          <div className="card">
            <img src={refund} className="card-img-top" alt="Check Refund and Credit details"/>
            <a href='#'>
              <div className="card-body">
                <h5 className="card-title">Check Refund and Credit details?</h5>
                <p className="card-text">View your refund/credit details and check status online.</p>
              </div>
            </a>
          </div>
        </div>

        <div className="col mb-4 col-lg-4 ">
          <div className="card">
            <img src={Boarding} className="card-img-top" alt="Payment Issues"/>
            <a href='#'>
              <div className="card-body">
                <h5 className="card-title">Payment Issues?</h5>
                <p className="card-text">Receive Payment information and assistance on other billing queries</p>
              </div>
            </a>
          </div>
        </div>
        
        
        <div className="col mb-4 col-lg-4">
          <div className="card">
            <img src={Dates} className="card-img-top" alt="Help with New Bookings"/>
            <a href='#'>
              <div className="card-body">
                <h5 className="card-title">Help with New Bookings?</h5>
                <p className="card-text">Get Assistance to make a new booking</p>
              </div>
            </a>
          </div>
        </div>
        <div className="col mb-4  col-lg-4">
          <div className="card">
            <img src={Cancel} className="card-img-top" alt="Want to Check-in?"/>
            <a href='#'>
              <div className="card-body">
                <h5 className="card-title">Want to Check-in?</h5>
                <p className="card-text">Get assistance on flight check-in and Boarding Pass.</p>
              </div>
            </a>
          </div>
        </div>

        <div className="col mb-4 col-lg-4">
          <div className="card">
            <img src={Booking} className="card-img-top" alt="Want to Cancel your trip?"/>
            <a href='#'>
              <div className="card-body">
                <h5 className="card-title">Want to Cancel your trip?</h5>
                <p className="card-text">Get Assistance to make a new booking</p>
              </div>
            </a>
          </div>
        </div>
        
        
      </div>
      </div>
    </>
  );
}

export default Help;
