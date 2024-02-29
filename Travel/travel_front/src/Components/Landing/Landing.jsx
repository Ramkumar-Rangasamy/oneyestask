import React from 'react';

import './landing.css';

import {Link} from 'react-router-dom';
const Landing = () => {
  return (
    <div className="banner-video">
     

      <div className="content" id="home">
        <div className="title">
          <h1>FIRST CHEAPOAIR TRAVELS</h1>
          <p>Plan your trip with us and travel around the world with the most affordable packages!</p>
          <Link className="button-landing" to='/newaccount'>Register Now!</Link>
        </div>
        
      </div>
    </div>
  );
};

export default Landing;
