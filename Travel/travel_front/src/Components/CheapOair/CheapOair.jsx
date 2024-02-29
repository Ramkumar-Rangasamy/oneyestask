import React from 'react';
import './cheapOair.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const CheapOair = () => {
  return (
    <>
      <div className="cheapoair-container  m-3">
        <h2>Here's why travelers choose CheapOair</h2>

        <div className='row p-4'>
          <div className="feature col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <h5> <FontAwesomeIcon icon={faCheck} className='text-success' /> Get Great Deals!</h5>
            <p>Choose from 500+ airlines for low airfares!</p>
          </div>

          <div className="feature col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <h5> <FontAwesomeIcon icon={faCheck} className='text-success' /> Price Match Promise</h5>
            <p>Find low prices to destinations worldwide.</p>
          </div>

          <div className="feature col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <h5><FontAwesomeIcon icon={faCheck} className='text-success' /> Easy Cancellations with CheapOair</h5>
            <p>Convenient self-service options available online.</p>
          </div>

          <div className="feature col-lg-3 col-md-6 col-sm-6 col-xs-12 ">
            <h5><FontAwesomeIcon icon={faCheck} className='text-success' /> Expert Guidance</h5>
            <p>Get personalized assistance from our travel experts.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheapOair;
