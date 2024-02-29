import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Packselecting = () => {
  const { pkgId } = useParams();
  const [pkg, setPkg] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const response = await fetch(`http://localhost:2001/package/${pkgId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch package');
        }
        const data = await response.json();
        setPkg(data);
      } catch (error) {
        console.error('Error fetching package:', error);
        setError(error.message);
      }
    };

    fetchPackage();
  }, [pkgId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!pkg) {
    return <div>Loading...</div>;
  }

  return (
   <>
    <div className='container'>
            <h1 className='pt-3 pb-4'>Secure Package — Almost done!</h1>
            <h1 className='pb-3'>Package Details</h1>
                <div className="card mb-3">
                
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={pkg.imageUrl} className="card-img" alt={pkg.name} />
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="card-body">
                                <h4 className="card-title">{pkg.name}</h4>
                                <p className="card-text"> {pkg.description}</p>
                                <p className="card-text">${pkg.price}</p>
                                <p className="card-text">{pkg.duration}</p>
                            </div>
                        </div>
                        
                        <div className='col-md-2 d-flex align-items-center'>
                        <Link to='/packgflight'>
                            <button className="btn btn-success mt-3 pl-3 pr-4 mx-auto d-block d-md-inline-block">Continue</button>
                        </Link>
                        </div>

                    </div>
                </div>
            
        </div>
   
   </>
  );
};

export default Packselecting;



