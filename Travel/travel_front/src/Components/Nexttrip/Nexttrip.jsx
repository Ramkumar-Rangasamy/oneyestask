import React from 'react'

import './nexttrip.css'

import card1 from './Assets/card-1.jpg'
import card2 from './Assets/card-2.jpg'
import card3 from './Assets/card-3.jpg'
const Nexttrip = () => {
  return (
   <>

        <div className='container'>
            <div className='pt-5  found-card'>
                <h4>Found these <span >low</span> fare deals for your next trip</h4>
            </div>
        
            <div className=' pt-3'>
                <div className="row row-cols-1 row-cols-md-3  row-cols-lg-3 g-4">

                    <div className="col">
                        <div className="card h-100">
                        <img src={card1} className="card-img-top" alt="Hollywood Sign on The Hill"/>
                            <div className="card-body">
                                <div className='row pt-4'>

                                    <div className='pl-5'>
                                        <h5 className="card-title">Los Angeles</h5>
                                        <p className="card-text" >BOM - LAX</p>
                                        <p className="card-text">Oct 30 - Nov 08</p>
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
                                <p className="card-text pl-3 ">Similar trip cost to Los Angeles</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col">
                        <div className="card h-100">
                        <img src={card2} className="card-img-top" alt="Hollywood Sign on The Hill"/>
                            <div className="card-body">
                                <div className='row pt-4'>

                                    <div className='pl-5'>
                                        <h5 className="card-title">Singapore</h5>
                                        <p className="card-text" >BOM - SIN</p>
                                        <p className="card-text">Mar 20 - Mar 22</p>
                                    </div>

                                    <div className='m-auto pb-4'>
                                        <h5 className="card-text text-success">19,901<sup>.45*</sup></h5>
                                        <p className="card-text">Round Trip</p>
                                    </div>
                                
                                </div>
                                <hr className='style-hr'/>
                                <div className='row pl-4'>
                                    <div className='pl-5'>
                                    <p className="card-text">26,000</p>
                                    </div>
                                    <div className='m-auto pb-4'>
                                    <p className="card-text">33,000</p>
                                    </div>
                                </div>

                                <div className='pl-5'>
                                <p className="card-text pl-3 ">Similar trip cost to Singapore</p> 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card  h-100">
                          <img src={card3} className="card-img-top" alt="Hollywood Sign on The Hill"/>
                            <div className="card-body">
                                <div className='row pt-4'>

                                    <div className='pl-5'>
                                        <h5 className="card-title">New York City</h5>
                                        <p className="card-text" >BOM - NYC</p>
                                        <p className="card-text">Jun 15  - Sep 28</p>
                                    </div>

                                    <div className='m-auto pb-4'>
                                        <h5 className="card-text text-success">70,948<sup>.69*</sup></h5>
                                        <p className="card-text">Round Trip</p>
                                    </div>
                                
                                </div>
                                <hr className='style-hr'/>
                                <div className='row pl-4'>
                                    <div className='pl-5'>
                                    <p className="card-text">85,606</p>
                                    </div>
                                    <div className='m-auto pb-4'>
                                    <p className="card-text">80,124</p>
                                    </div>
                                </div>

                                <div className='pl-5'>
                                <p className="card-text pl-3 ">Similar trip cost to New York City</p> 
                                </div>
                            </div>
                        </div>
                    </div>  
                    
                </div>
            </div>

            <div  className='p-3'>
                <p className='para-card'>* All fares above were found in last 8 hours. Fares are round trip/one way. Fares incl. all fuel surcharges, taxes & fees and our service fees. Displayed fares are based on historical data, are subject to change and cannot be guaranteed at the time of booking. See all booking terms and conditions. ref E_h-1Ol3dUW1BzMZZ6o1DQ|omIQIVdSskWa-u43Ao3n6w</p>
            </div>

        </div>
   
   </>
  )
}

export default Nexttrip