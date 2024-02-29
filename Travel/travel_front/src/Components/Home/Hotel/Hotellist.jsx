import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hotellist = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
      fetch('http://localhost:2001/hotellest')
        .then(response => response.json())
        .then(data => setHotels(data))
        .catch(error => console.error('Error fetching hotels:', error));
    }, []);

    return (
        <div className='container'>
            <h1 className='p-2'>Available Hotels</h1>
            {hotels.map(hotel => (
                <div className="card mb-3" key={hotel.id}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={hotel.image} className="card-img" alt={hotel.name} />
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="card-body">
                                <h4 className="card-title">{hotel.name}</h4>
                                <p className="card-text"> {hotel.city}</p>
                                <p className="card-text"> {hotel.rating}</p>
                                <p className="card-text">${hotel.price}</p>
                                <p className="card-text">{hotel.amenities.join(', ')}</p>
                            </div>
                        </div>
                        <div className='col-md-2 d-flex align-items-center'>
                            <Link to={`/booking/${hotel.id}`}>
                               <button className="btn btn-success mt-3 pl-3 pr-4 mx-auto d-block d-md-inline-block">Select</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Hotellist;
