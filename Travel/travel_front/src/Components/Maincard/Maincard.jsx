import React from 'react'

import './maincard.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

import mcard1 from './Assets/mcard-1.jpg'
import mcard2 from './Assets/mcard-2.jpg'
import mcard3 from './Assets/mcard-3.jpg'
import mcard4 from './Assets/mcard-4.jpg'
import mcard5 from './Assets/mcard-5.jpg'
import mcard6 from './Assets/mcard-6.jpg'
import mcard7 from './Assets/mcard-7.jpg'
import mcard8 from './Assets/mcard-8.jpg'
import mcard9 from './Assets/mcard-9.jpg'



const Maincard = () => {
  return (
    <>
        <div className=''>

            <div className='pt-5 found-card p-4'>
                <h4>ExploreDeals<span> <FontAwesomeIcon icon={faRightToBracket} /> </span> from <span>Mumbai</span></h4>
            </div>

            <div className='card-color m-4'>
                <div className="row row-cols-1 row-cols-md-3  row-cols-lg-3 g-4">
                    <div className="col mt-3">
                        <div className="card h-100">
                        <img src={mcard1} className="card-img-top" alt="Hollywood Sign on The Hill"/>
                            <div className="card-body">
                                <div className='row pt-4'>

                                    <div className='pl-5'>
                                        <h5 className="card-title">Male, Maldives</h5>
                                        <p className="card-text" >BOM - MLE</p>
                                        <p className="card-text">Oct 03 - Nov 08</p>
                                    </div>

                                    <div className='m-auto pb-4'>
                                        <h5 className="card-text text-success">24,948<sup>.61*</sup></h5>
                                        <p className="card-text">Round Trip</p>
                                    </div>
                                
                                </div>
                                <hr className='style-hr'/>
                                <div className='row pl-4'>
                                    <div className='pl-5'>
                                    <p className="card-text">20,606</p>
                                    </div>
                                    <div className='m-auto pb-4'>
                                    <p className="card-text">24,124</p>
                                    </div>
                                </div>

                                <div className='pl-5'>
                                <p className="card-text pl-3 ">How we calculate this</p> 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col mt-3">
                        <div className="card h-100">
                        <img src={mcard2} className="card-img-top" alt="Hollywood Sign on The Hill"/>
                            <div className="card-body">
                                <div className='row pt-4'>

                                    <div className='pl-5'>
                                        <h5 className="card-title">Nepal</h5>
                                        <p className="card-text" >BOM - KTM</p>
                                        <p className="card-text">Oct 30 - Nov 08</p>
                                    </div>

                                    <div className='m-auto pb-4'>
                                        <h5 className="card-text text-success">18,948<sup>.51*</sup></h5>
                                        <p className="card-text">Round Trip</p>
                                    </div>
                                
                                </div>
                                <hr className='style-hr'/>
                                <div className='row pl-4'>
                                    <div className='pl-5'>
                                    <p className="card-text">19,606</p>
                                    </div>
                                    <div className='m-auto pb-4'>
                                    <p className="card-text">22,124</p>
                                    </div>
                                </div>

                                <div className='pl-5'>
                                <p className="card-text pl-3 ">How we calculate this</p> 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col mt-3">
                        <div className="card h-100">
                        <img src={mcard3} className="card-img-top" alt="Hollywood Sign on The Hill"/>
                            <div className="card-body">
                                <div className='row pt-4'>

                                    <div className='pl-5'>
                                        <h5 className="card-title">Singapore</h5>
                                        <p className="card-text" >BOM - LAX</p>
                                        <p className="card-text">Mar 07 - Mar 08</p>
                                    </div>

                                    <div className='m-auto pb-4'>
                                        <h5 className="card-text text-success">19,787<sup>.81*</sup></h5>
                                        <p className="card-text">Round Trip</p>
                                    </div>
                                
                                </div>
                                <hr className='style-hr'/>
                                <div className='row pl-4'>
                                    <div className='pl-5'>
                                    <p className="card-text">10,606</p>
                                    </div>
                                    <div className='m-auto pb-4'>
                                    <p className="card-text">20,124</p>
                                    </div>
                                </div>

                                <div className='pl-5'>
                                <p className="card-text pl-3 ">How we calculate this</p> 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col mt-3">
                        <div className="card h-100">
                        <img src={mcard4} className="card-img-top" alt="Hollywood Sign on The Hill"/>
                            <div className="card-body">
                                <div className='row pt-4'>

                                    <div className='pl-5'>
                                        <h5 className="card-title">Malaysia</h5>
                                        <p className="card-text" >BOM - KULM</p>
                                        <p className="card-text">Sep 10 - Sep 20</p>
                                    </div>

                                    <div className='m-auto pb-4'>
                                        <h5 className="card-text text-success">29,948<sup>.71*</sup></h5>
                                        <p className="card-text">Round Trip</p>
                                    </div>
                                
                                </div>
                                <hr className='style-hr'/>
                                <div className='row pl-4'>
                                    <div className='pl-5'>
                                    <p className="card-text">21,606</p>
                                    </div>
                                    <div className='m-auto pb-4'>
                                    <p className="card-text">30,124</p>
                                    </div>
                                </div>

                                <div className='pl-5'>
                                <p className="card-text pl-3 ">How we calculate this</p> 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col mt-3">
                        <div className="card h-100">
                        <img src={mcard5} className="card-img-top" alt="Hollywood Sign on The Hill"/>
                            <div className="card-body">
                                <div className='row pt-4'>

                                    <div className='pl-5'>
                                        <h5 className="card-title">Thailand</h5>
                                        <p className="card-text" >BOM - HKT</p>
                                        <p className="card-text">Jul 04 - Nov 10</p>
                                    </div>

                                    <div className='m-auto pb-4'>
                                        <h5 className="card-text text-success">29,948<sup>.88*</sup></h5>
                                        <p className="card-text">Round Trip</p>
                                    </div>
                                
                                </div>
                                <hr className='style-hr'/>
                                <div className='row pl-4'>
                                    <div className='pl-5'>
                                    <p className="card-text">25,606</p>
                                    </div>
                                    <div className='m-auto pb-4'>
                                    <p className="card-text">43,104</p>
                                    </div>
                                </div>

                                <div className='pl-5'>
                                <p className="card-text pl-3 ">How we calculate this</p> 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col mt-3">
                        <div className="card h-100">
                        <img src={mcard6} className="card-img-top" alt="Hollywood Sign on The Hill"/>
                            <div className="card-body">
                                <div className='row pt-4'>

                                    <div className='pl-5'>
                                        <h5 className="card-title">Vietnam</h5>
                                        <p className="card-text" >BOM - SGN</p>
                                        <p className="card-text">May 24 - May 27</p>
                                    </div>

                                    <div className='m-auto pb-4'>
                                        <h5 className="card-text text-success">36,948<sup>.41*</sup></h5>
                                        <p className="card-text">Round Trip</p>
                                    </div>
                                
                                </div>
                                <hr className='style-hr'/>
                                <div className='row pl-4'>
                                    <div className='pl-5'>
                                    <p className="card-text">36,606</p>
                                    </div>
                                    <div className='m-auto pb-4'>
                                    <p className="card-text">42,124</p>
                                    </div>
                                </div>

                                <div className='pl-5'>
                                <p className="card-text pl-3 ">How we calculate this</p> 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col mt-3">
                        <div className="card h-100">
                        <img src={mcard7} className="card-img-top" alt="Hollywood Sign on The Hill"/>
                            <div className="card-body">
                                <div className='row pt-4'>

                                    <div className='pl-5'>
                                        <h5 className="card-title">Japan</h5>
                                        <p className="card-text" >BOM - TYO</p>
                                        <p className="card-text">Apr 23 - May 08</p>
                                    </div>

                                    <div className='m-auto pb-4'>
                                        <h5 className="card-text text-success">40,948<sup>.41*</sup></h5>
                                        <p className="card-text">Round Trip</p>
                                    </div>
                                
                                </div>
                                <hr className='style-hr'/>
                                <div className='row pl-4'>
                                    <div className='pl-5'>
                                    <p className="card-text">62,456</p>
                                    </div>
                                    <div className='m-auto pb-4'>
                                    <p className="card-text">73,234</p>
                                    </div>
                                </div>

                                <div className='pl-5'>
                                <p className="card-text pl-3 ">How we calculate this</p> 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col mt-3">
                        <div className="card h-100">
                        <img src={mcard8} className="card-img-top" alt="Hollywood Sign on The Hill"/>
                            <div className="card-body">
                                <div className='row pt-4'>

                                    <div className='pl-5'>
                                        <h5 className="card-title">Los Angeles,CA</h5>
                                        <p className="card-text" >BOM - LAX</p>
                                        <p className="card-text">Mar 21 - Mar 31</p>
                                    </div>

                                    <div className='m-auto pb-4'>
                                        <h5 className="card-text text-success">80,948<sup>.61*</sup></h5>
                                        <p className="card-text">Round Trip</p>
                                    </div>
                                
                                </div>
                                <hr className='style-hr'/>
                                <div className='row pl-4'>
                                    <div className='pl-5'>
                                    <p className="card-text">93,606</p>
                                    </div>
                                    <div className='m-auto pb-4'>
                                    <p className="card-text">109,124</p>
                                    </div>
                                </div>

                                <div className='pl-5'>
                                <p className="card-text pl-3 ">How we calculate this</p> 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col mt-3">
                        <div className="card h-100">
                        <img src={mcard9} className="card-img-top" alt="Hollywood Sign on The Hill"/>
                            <div className="card-body">
                                <div className='row pt-4'>

                                    <div className='pl-5'>
                                        <h5 className="card-title">New York City</h5>
                                        <p className="card-text" >BOM - LAX</p>
                                        <p className="card-text">Mar 24 - Apr 03</p>
                                    </div>

                                    <div className='m-auto pb-4'>
                                        <h5 className="card-text text-success">75,948<sup>.92*</sup></h5>
                                        <p className="card-text">Round Trip</p>
                                    </div>
                                
                                </div>
                                <hr className='style-hr'/>
                                <div className='row pl-4'>
                                    <div className='pl-5'>
                                    <p className="card-text">853,606</p>
                                    </div>
                                    <div className='m-auto pb-4'>
                                    <p className="card-text">100,124</p>
                                    </div>
                                </div>

                                <div className='pl-5'>
                                   <p className="card-text pl-3 ">How we calculate this</p> 
                                </div>
                            </div>
                        </div>
                    </div>

                    

                </div>

                <div  className='p-3'>
                <p className='para-card '>* All fares above were found in last 8 hours. Fares are round trip/one way. Fares incl. all fuel surcharges, taxes & fees and our service fees. Displayed fares are based on historical data, are subject to change and cannot be guaranteed at the time of booking. See all booking terms and conditions. ref E_h-1Ol3dUW1BzMZZ6o1DQ|omIQIVdSskWa-u43Ao3n6w</p>
                </div>
            </div>
                
       </div>


       
    
    </>
  )
}

export default Maincard