import React, { useState } from 'react';
import '../home.css';


//Toast error or success meassage package
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

//router link
import { Link, useNavigate } from "react-router-dom";

const Hotel = () => {


    const navigate = useNavigate();

    const [city, setCity] = useState('');
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const [room, setRoom] = useState('');
    const [travellers, setTravellers] = useState(1);
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await fetch('http://localhost:2001/hsearch', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              city: city,
              checkin: checkin,
              checkout: checkout,
              room: room,
              guests: travellers,
            }),
          });
          if (response.ok) {
            const data = await response.json();
            console.log(data.message); // Log success message from server
            // Handle success scenario, such as showing a success message to the user
            toast.success('hotels searching');
            setTimeout(() => {
                navigate("/hotellist");
            }, 3000);
          } else {
            throw new Error('Failed to insert data');
          }
        } catch (error) {
          console.error('Error submitting form:', error);
          // Handle error scenario, such as showing an error message to the user
          toast.error('Error submitting form');
        }
      };
  
    return (
        <div className="">
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-12 col-lg-2">
                    <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername1">City, Property Name</label>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            id="inlineFormInputGroupUsername1"
                            placeholder="Destination"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                </div>

                <div className="col-12 col-lg-2">
                    <label className="visually-hidden" htmlFor="date1">Check-In</label>
                    <div className="input-group">
                        <input
                            className="form-control"
                            id="date1"
                            placeholder="Check-In Date"
                            type="date"
                            value={checkin}
                            onChange={(e) => setCheckin(e.target.value)}
                        />
                    </div>
                </div>

                <div className="col-12 col-lg-2">
                    <label className="visually-hidden" htmlFor="date2">Check-Out</label>
                    <div className="input-group">
                        <input
                            className="form-control"
                            id="date2"
                            placeholder="Check-Out Date"
                            type="date"
                            value={checkout}
                            onChange={(e) => setCheckout(e.target.value)}
                        />
                    </div>
                </div>

                <div className="col-12 col-lg-2">
                    <label>Room</label>
                    <div className="input-group">
                        <input
                            className="form-control"
                            id="room"
                            placeholder="Number of Rooms"
                            type="number"
                            value={room}
                            onChange={(e) => setRoom(e.target.value)}
                        />
                    </div>
                </div>

                <div className="col-12 col-lg-2">
                    <label>Travellers</label>
                    <div className="input-group">
                        <input
                            className="form-control"
                            id="travellers"
                            placeholder="Number of Travellers"
                            type="number"
                            value={travellers}
                            onChange={(e) => setTravellers(e.target.value)}
                        />
                    </div>
                </div>

                <div className="col-12 col-lg-2 mt-3 pt-3">
                    <button data-mdb-ripple-init type="submit" className="btn btn-success pr-4 pl-4 p-2">Search Hotels</button>
                </div>
                <ToastContainer />
            </form>
        </div>
    );
};

export default Hotel;
