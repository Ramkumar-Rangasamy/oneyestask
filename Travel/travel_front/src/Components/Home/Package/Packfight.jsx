import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // Import Swal if you're using it for alerts
import { Link, useNavigate } from "react-router-dom"; // Import your navigation function/component

const Packfight = () => {

    const navigate = useNavigate();
  const [fights, setFights] = useState([]);
  const [totalAvailableTickets, setTotalAvailableTickets] = useState(0);
  const [selectedFight, setSelectedFight] = useState(null);
  const [tickets, setTickets] = useState(1); // Assuming default ticket count is 1
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchFights();
  }, [totalAvailableTickets]); // Adding totalAvailableTickets as a dependency

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

  const handleBooking = async (selectedFight, tickets) => {
    try {
      await axios.post('http://localhost:2001/api/bookings', { fightId: selectedFight.id, tickets });
      setMessage('Booking successful!');
      
      Swal.fire({
        title: 'Please Wait !',
        html: 'data uploading',// add html attribute if you want or remove
        allowOutsideClick: false,
        onBeforeOpen: () => {
            Swal.showLoading()
        },
    });
      setTimeout(() => {
        navigate("/conform");
      }, 3000);

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
    <div className="container">
      <h1 className="pb-3">Available Flights</h1>
      <p className="pb-3">Total Available Tickets: {totalAvailableTickets}</p>
      <div className="row">
        {fights.map((fight) => (
          <div key={fight.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{fight.name}</h5>
                <p className="card-text">
                  Date: {formatDate(fight.date)} - Location: {fight.location}
                  <br />
                  Tickets Available: {fight.ticketsAvailable}
                  <br />
                  Price: ${fight.price}
                </p>
                <button className="btn btn-primary mt-2" onClick={() => setSelectedFight(fight)}>Continue</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    {selectedFight && (
      <div className="booking-card m-5 col-lg-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Total Available Tickets: {totalAvailableTickets}</h2>
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
                  <button className="btn btn-success p-2 mb-4 " onClick={() => handleBooking(selectedFight, tickets)}>Flight selected</button>
                </div>
              </div> 
             
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default Packfight;
