import React, { useState, useEffect } from "react";
import axios from "axios";

import { ToastContainer, toast,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link, useNavigate } from "react-router-dom";
import unnamed from './Assets/unnamed.png'; 
import './fbooking.css'
import Swal from 'sweetalert2';

function Fbooking() {

  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [fights, setFights] = useState([]);
  const [selectedFight, setSelectedFight] = useState(null);
  const [tickets, setTickets] = useState('');
  const [message, setMessage] = useState('');
  const [totalAvailableTickets, setTotalAvailableTickets] = useState(0);

  useEffect(() => {
    fetchFlightSearchData();
    fetchFights();
  }, []);

  const fetchFlightSearchData = async () => {
    try {
      const response = await fetch('http://localhost:2001/searchdata', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch flight search data');
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching flight search data:', error.message);
    }
  };

  const fetchFights = async () => {
    try {
      const response = await axios.get("http://localhost:2001/api/fights");
      setFights(response.data);
      calculateTotalAvailableTickets(response.data);
    } catch (error) {
      console.error("Error fetching fights:", error);
    }
  };

  const calculateTotalAvailableTickets = (fightsData) => {
    const totalTickets = fightsData.reduce(
      (total, fight) => total + fight.ticketsAvailable,
      0
    );
    setTotalAvailableTickets(totalTickets);
  };

  const handleSelectFight = (fight) => {
    toast.success('Loading Please wait Scroll the Page', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce
    });
    setSelectedFight(fight);
  };

  const handleBooking = async () => {
    try {
      await axios.post('http://localhost:2001/api/bookings', { fightId: selectedFight.id, tickets });
      setMessage('Booking successful!');
      
      Swal.fire({
        title: 'Your fight tickets are Booking',
        text: 'Booking Successful',
        icon: 'success'
      });
      setTimeout(() => {
        navigate("/home");
      }, 5000);

    } catch (error) {
      setMessage('Booking failed. Please try again.');
      console.error('Error booking fight:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <>
       <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
                />
                
      <div className='m-4'>
        <h1>Checking Your Booking details.</h1>
        <div className='container mt-5'>
          <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={unnamed}  width='150' height='150' className='m-4 pt-3'/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  {searchResults.map((result) => ( 
                    <div key={result.id}>   
                      <h5 className="card-text">Flight Type : {result.flight_type}</h5>
                      <p className="card-text">Selected : {result.selected_option}</p>
                      <p className="card-text">From : {result.from_where}</p>
                      <p className="card-text">To : {result.to_where}</p>
                      <p className="card-text">Departure Date : {formatDate(result.departure_date)}</p>
                      <p className="card-text">Return Date : {formatDate(result.return_date)}</p>
                      <p className="card-text">Travellers : {result.travellers}</p>
                    </div>
                  ))}      
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-10 m-4 container">
        <h1>Available Flights</h1>
          <div className="row">
            {fights.map((fight) => (
              <div key={fight.id} className="col-md-12">
                <div className="card mt-2 ml-4">
                  <div className="card-body row pt-3">
                    <div className="col-12 col-md-4">
                      <h5 className="card-title pt-4 pl-5">{fight.name}</h5>
                    </div>
                    <div className="col-12 col-md-4">
                      <p className="card-text pl-5 available-fights">
                        {fight.date} - {fight.location}<br />
                        {fight.ticketsAvailable} tickets available
                        <div className="row pl-3 mt-2">
                          <p className="pt-1">Price:</p>
                          <p className="price-flight">{fight.price} </p>
                        </div>
                      </p>
                    </div>
                    <div className="col-12 col-md-4">
                      <button className="mt-3 btn btn-success " onClick={() => handleSelectFight(fight)}>Select</button>
                    </div>
                  </div>
                </div>
             </div>
            ))}
          </div>
      </div>

      <div className="booking-card m-5 col-lg-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Total Available Tickets: {totalAvailableTickets}</h2>
            {selectedFight && (
              <div className="booking-details">
                  <h2>Booking <span>{selectedFight.name}</span> Flight</h2>
                  <p>Tickets Available: {selectedFight.ticketsAvailable}</p>
                  <p>Price per Ticket: ${selectedFight.price}</p>
                  <p>Total Price: ${selectedFight.price * tickets}</p>
                <div className="row">
                  <div className="col-7">
                    <input className='form-control mb-2 mt-2' placeholder="Enter the number of tickets" type="number" min="1" value={tickets} onChange={e => setTickets(parseInt(e.target.value))} />
                  </div>
                  <div className="col-5 mt-2">
                    <button className="btn btn-success p-2 mb-4 " onClick={handleBooking}> Booking</button>
                  </div>
                </div> 
                <p className="text-muted">{message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Fbooking;
