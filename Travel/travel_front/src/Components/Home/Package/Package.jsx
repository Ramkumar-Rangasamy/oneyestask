import React, { useState } from 'react';
import '../home.css';


import axios from 'axios';

//Toast error or success meassage package
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

//router link
import { Link, useNavigate } from "react-router-dom";

const Package = () => {

    const navigate = useNavigate();

    const [location1, setLocation1] = useState('');
    const [location2, setLocation2] = useState('');
    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');
    const [room, setRoom] = useState('');
    const [travellers, setTravellers] = useState('');
    const [package_type, setPackage_type] = useState('Flights + Hotel');
    const [selectedOption, setSelectedOption] = useState(' Coach'); 
    const [flight_type, setFlight_type] = useState('Round Trip'); 

    const handleFlightTypeChange = (e) => {
        setFlight_type(e.target.value);
    };

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    
    const handleSelectChangepackage = (e) => {
        setPackage_type(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const validFlightType = ['Round Trip', 'Single Way', 'Multi-City'].includes(flight_type) ? flight_type : '';
            const Validpackagetype = ['Flights + Hotel', 'Flight + Car', 'Hotel + Car'].includes(package_type) ? package_type : '';
      
            await axios.post('http://localhost:2001/psearch', {
                package_type :Validpackagetype,
                flight_type  :validFlightType,
                selected_option :selectedOption,
                location_from :location1,
                location_to :location2,
                date_from :date1,
                date_to :date2,
                Rooms :room,
                travellers:travellers
            });
            toast.success('packages searching');
            setTimeout(() => {
                navigate("/fpackagelist");
            }, 3000);
        } catch (error) {
            console.error('Error submitting package search data:', error);
            toast.error('Error submitting package search data');
            
        }
    };

    return (
        <>
            <div className='p-2 d-flex flex-wrap'>
            <ToastContainer />
                <form onSubmit={handleSubmit}>
                    <select
                        name="choice"
                        className='select-box'
                        value={package_type}
                        onChange={handleSelectChangepackage}
                    >
                        <option value="Flights + Hotel">Flights + Hotel</option>
                        <option value="Flight + Car">Flight + Car</option>
                        <option value="Hotel + Car">Hotel + Car</option>
                    </select>

                    <div className="row g-3  ml-1">
                        <label htmlFor='inlineRadio1' className='radio-label mr-3'>
                            <input
                                type='radio'
                                name='inlineRadio'
                                id='inlineRadio1'
                                value='Round Trip'
                                className='input-radio'
                                checked={flight_type === 'Round Trip'}
                                onChange={handleFlightTypeChange}
                            />
                            <span className="custom-radio"></span>
                            Round Trip
                        </label>

                        <label htmlFor='inlineRadio2' className='radio-label mr-3'>
                            <input
                                type='radio'
                                name='inlineRadio'
                                id='inlineRadio2'
                                value='Multi-City'
                                className='input-radio'
                                checked={flight_type === 'Multi-City'}
                                onChange={handleFlightTypeChange}
                            />
                            <span className="custom-radio"></span>
                            Multi-City
                        </label>

                        <select
                            name="choice"
                            className='select-box mb-2'
                            value={selectedOption}
                            onChange={handleSelectChange}
                        >
                            <option value="Coach">Coach</option>
                            <option value="Premium Economy">Premium Economy</option>
                            <option value="Business">Business</option>
                            <option value="First">First</option>
                        </select>
                    </div>

                    <div className="row g-3 mt-3">
                        <div className="col-12 col-lg-2">
                            <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername1">Location From</label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inlineFormInputGroupUsername1"
                                    placeholder="From Where"
                                    value={location1}
                                    onChange={(e) => setLocation1(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-12 col-lg-2">
                            <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername2">Location To</label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inlineFormInputGroupUsername2"
                                    placeholder="To Where"
                                    value={location2}
                                    onChange={(e) => setLocation2(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-12 col-lg-2">
                            <label className="visually-hidden" htmlFor="date1">Departure</label>
                            <div className="input-group">
                                <input
                                    className="form-control"
                                    id="date1"
                                    placeholder="Departure Date"
                                    type="date"
                                    value={date1}
                                    onChange={(e) => setDate1(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-12 col-lg-2">
                            <label className="visually-hidden" htmlFor="date2">Return</label>
                            <div className="input-group">
                                <input
                                    className="form-control"
                                    id="date2"
                                    placeholder="Return Date"
                                    type="date"
                                    value={date2}
                                    onChange={(e) => setDate2(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-12 col-lg-2">
                            <label>Rooms</label>
                            <div className="input-group">
                                <input
                                    className="form-control"
                                    id="roomInput"
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
                            <button data-mdb-ripple-init type="submit" className="btn btn-success pr-4 pl-4 p-2">Search Packages</button>
                        </div>
                    </div>
                   
                </form>
            </div>
        </>
    );
}

export default Package;
