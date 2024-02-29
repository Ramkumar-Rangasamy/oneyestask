import React from 'react';
import './cheapOair.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const CheapOair = () => {
  return (
    <>
      <div className="cheapoair-container ">
        <h2>Here's why travelers choose CheapOair</h2>

        <div className='row pt-3'>
          <div className="feature col-lg-3">
           
            <h5> <FontAwesomeIcon icon={faCheck} className='text-success' /> Get Great Deals!</h5>
            <p className='col-8'>Choose from 500+ airlines for low airfares!</p>
          </div>

          <div className="feature col-lg-3">
            
            <h5> <FontAwesomeIcon icon={faCheck} className='text-success' /> Price Match Promise</h5>
            <p className='col-8'>Find low prices to destinations worldwide.</p>
          </div>

          <div className="feature col-lg-3">
            
            <h5><FontAwesomeIcon icon={faCheck} className='text-success' /> Easy Cancellations with CheapOair</h5>
            <p className='col-8'>Convenient self-service options available online.</p>
          </div>

          <div className="feature col-lg-3">
            
            <h5><FontAwesomeIcon icon={faCheck} className='text-success' /> Expert Guidance</h5>
            <p className='col-8'>Get personalized assistance from our travel experts.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheapOair;
