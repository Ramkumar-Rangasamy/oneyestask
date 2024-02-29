import React from 'react';
import './airline.css';
import srt1 from './Assets/srt-1.jpg';
import srt2 from './Assets/srt-2.png';
import srt3 from './Assets/srt-3.png';
import srt4 from './Assets/srt-4.png';
import srt5 from './Assets/srt-5.png';
import srt6 from './Assets/srt-6.png';

const Airlines = () => {
  return (
    <>
      <div className='srt-banner  '>
        <div className='col-5 p-3'>
          <span className='text-white srt-banner__heading'>Need help booking? Our agents are Ready!</span>
          <span className='srt-banner__text '>Call us 24/7 at 000-800-050-3540</span>
        </div>
        <div className='col-7 pb-3'>
          <div className='row airline-list'>
            <span className='col-12 col-lg-2'>
              <img src={srt1} width='103' height='46' alt='Hawaiian Airlines'/>
              <br/>
              <p>Hawaiian Airlines</p>
            </span>
            <span className='col-12 col-lg-2'>
              <img src={srt2} width='103' height='46' alt='JetBlue Airways'/>
              <br/>
              <p>JetBlue Airways</p>
            </span>
            <span className='col-12 col-lg-2'>
              <img src={srt3} width='103' height='46' alt='Turkish Airways'/>
              <br/>
              <p>Turkish Airways</p>
            </span>
            <span className='col-12 col-lg-2'>
              <img src={srt4} width='103' height='46' alt='Avelo Airways'/>
              <br/>
              <p>Avelo Airways</p>
            </span>
            <span className='col-12 col-lg-2'>
              <img src={srt5} width='103' height='46' alt='Berrze Airways'/>
              <br/>
              <p>Berrze Airways</p>
            </span>
            <span className='col-12 col-lg-2'>
              <img src={srt6} width='103' height='46' alt='Frontier Airliner'/>
              <br/>
              <p>Frontier Airliner</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Airlines;
