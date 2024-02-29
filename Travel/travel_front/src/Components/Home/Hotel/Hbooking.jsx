import React, { useState,useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Hbooking = () => {
    const { hotelId } = useParams();
    const [hotel, setHotel] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:2001/hotellest/${hotelId}`)
            .then(response => response.json())
            .then(data => setHotel(data))
            .catch(error => console.error('Error fetching hotel:', error));
    }, [hotelId]);

    if (!hotel) {
        return <div>Loading...</div>;
    }

    return (
        <>
           
           <div className='container'>
            <h1 className='pt-3 pb-4'>Secure booking — Almost done!</h1>
            
                <div className="card mb-3">
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
                                <p className='text-danger'>Breakfast Included</p>
                                <p className="card-text">{hotel.amenities.join(', ')}</p>
                            </div>
                        </div>
                        
                        <div className='col-md-2 d-flex align-items-center'>
                        <Link to='/conform'>
                            <button className="btn btn-success mt-3 pl-3 pr-4 mx-auto d-block d-md-inline-block">Booking</button>
                        </Link>
                        </div>

                    </div>
                </div>
            
        </div>
        
        </>
        
);

}

export default Hbooking;


