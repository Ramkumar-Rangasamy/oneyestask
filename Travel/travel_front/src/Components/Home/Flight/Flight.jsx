import React, { useState } from 'react';
import axios from 'axios';

//Toast error or success meassage package
import { ToastContainer, toast,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//router link
import { Link, useNavigate } from "react-router-dom";

const Flight = () => {

    const navigate = useNavigate();

    const [flightType, setFlightType] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [location1, setLocation1] = useState('');
    const [location2, setLocation2] = useState('');
    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');
    const [travellers, setTravellers] = useState(1);

    const handleFlightTypeChange = (e) => {
        setFlightType(e.target.value);
    };

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const validFlightType = ['Round Trip', 'Single Way', 'Multi-City'].includes(flightType) ? flightType : '';
      
            await axios.post('http://localhost:2001/search', {
                flight_type: validFlightType,
                selected_option: selectedOption,
                from_where: location1,
                to_where: location2,
                departure_date: date1,
                return_date: date2,
                travellers: travellers
            });
           
            toast.success('Flight searching', {
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
            setTimeout(() => {
                navigate('/fbooking');
            }, 2000); // Adjust the delay as needed
    
        } catch (error) {
            console.error('Error submitting flight search data:', error);
            toast.error('An error occurred. Please try again.');
        }
    };
    

    return (
        <div className='p-2 d-flex flex-wrap'> 
            <form onSubmit={handleSubmit}>
                <label htmlFor='roundTrip' className='radio-label mr-3'> 
                    <input 
                        type='radio' 
                        name='flightType' 
                        id='roundTrip' 
                        value='Round Trip' 
                        checked={flightType === 'Round Trip'} 
                        onChange={handleFlightTypeChange} 
                    />
                    <span className="custom-radio"></span>
                    Round Trip
                </label>

                <label htmlFor='singleWay' className='radio-label mr-3'> 
                    <input 
                        type='radio' 
                        name='flightType' 
                        id='singleWay' 
                        value='Single Way' 
                        checked={flightType === 'Single Way'} 
                        onChange={handleFlightTypeChange} 
                    />
                    <span className="custom-radio"></span>
                    Single Way
                </label>

                <label htmlFor='multiCity' className='radio-label mr-3'> 
                    <input 
                        type='radio' 
                        name='flightType' 
                        id='multiCity' 
                        value='Multi-City' 
                        checked={flightType === 'Multi-City'} 
                        onChange={handleFlightTypeChange} 
                    />
                    <span className="custom-radio"></span>
                    Multi-City
                </label>
        
                <select 
                    name="selectedOption" 
                    className='select-box pl-4' 
                    value={selectedOption} 
                    onChange={handleSelectChange}
                >
                    <option value="Coach">Coach</option>
                    <option value="Premium Economy">Premium Economy</option>
                    <option value="Business">Business</option>
                    <option value="First">First</option>
                </select>

                <div className="row g-3 mt-3">
                    {/* Input fields for location, dates, and travelers */}
                    <div className="col-lg-2">
                        <label htmlFor="locationFrom">From</label>
                        <input
                            type="text"
                            className="form-control"
                            id="locationFrom"
                            placeholder="From Where"
                            value={location1}
                            onChange={(e) => setLocation1(e.target.value)}
                        />
                    </div>

                    <div className="col-lg-2">
                        <label htmlFor="locationTo">To</label>
                        <input
                            type="text"
                            className="form-control"
                            id="locationTo"
                            placeholder="To Where"
                            value={location2}
                            onChange={(e) => setLocation2(e.target.value)}
                        />
                    </div>

                    <div className="col-lg-2">
                        <label htmlFor="departureDate">Departure Date</label>
                        <input
                            className="form-control"
                            id="departureDate"
                            type="date"
                            value={date1}
                            onChange={(e) => setDate1(e.target.value)}
                        />
                    </div>

                    <div className="col-lg-2">
                        <label htmlFor="returnDate">Return Date</label>
                        <input
                            className="form-control"
                            id="returnDate"
                            type="date"
                            value={date2}
                            onChange={(e) => setDate2(e.target.value)}
                        />
                    </div>

                    <div className="col-lg-2">
                        <label htmlFor="travellers">Travellers</label>
                        <input
                            className="form-control"
                            id="travellers"
                            type="number"
                            value={travellers}
                            onChange={(e) => setTravellers(e.target.value)}
                        />
                    </div>

                    <div className="col-lg-2 mt-3 pt-3">
                        <button type="submit" className="btn btn-success pr-4 pl-4 p-2">Search Flights</button>
                    </div>
                   
                </div>
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
            </form>
        </div>
    );
}

export default Flight;
