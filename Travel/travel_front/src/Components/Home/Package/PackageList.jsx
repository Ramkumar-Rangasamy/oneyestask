import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const PackageList = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get('http://localhost:2001/packages');
        setPackages(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching packages:', error);
        setLoading(false);
        setError(error);
      }
    };

    fetchPackages();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='container'>
      <h1 className='p-2 '>Select Rooms</h1>
      {packages.map(pkg => (
        <div className="card mb-3" key={pkg.id}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={pkg.imageUrl} className="card-img" alt={pkg.name} />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="card-body">
                <h5 className="card-title">{pkg.name}</h5>
                <p className="card-text">{pkg.description}</p>
                <p className="card-text">${pkg.price}</p>
                <p className="card-text">{pkg.duration}</p>
              </div>
            </div>
            <div className='col-md-2 d-flex align-items-center'>
            <Link to={`/select/${pkg.id}`} >
              <button className="btn btn-success mt-3 pl-3 pr-4 mx-auto d-block d-md-inline-block">Select</button>
            </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackageList;
