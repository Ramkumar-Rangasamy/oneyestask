// import React, { useState } from 'react';
// import './home.css';

// const Car = () => {
//     const [location1, setLocation1] = useState('');
//     const [location2, setLocation2] = useState('');
//     const [date1, setDate1] = useState('');
//     const [date2, setDate2] = useState('');
//     const [time1, setTime1] = useState('');
//     const [ampm1, setAMPM1] = useState('AM'); // New state for AM/PM
//     const [time2, setTime2] = useState('');
//     const [ampm2, setAMPM2] = useState('AM'); // New state for AM/PM
    
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       // Your form submission logic here
//     };
  
//     return (
//         <>
//             <div class='p-2 d-flex flex-wrap'> 
//                 <label for='inlineRadio1' class='radio-label mr-3'> 
//                     <input type='radio' name='inlineRadio' id='inlineRadio1' value='option1' class='input-radio' />
//                     <span class="custom-radio"></span>
//                     Rental Cars
//                 </label>

//                 <label for='inlineRadio2' class='radio-label mr-3'> 
//                     <input type='radio' name='inlineRadio' id='inlineRadio2' value='option2' class='input-radio' />
//                     <span class="custom-radio"></span>
//                     Airport Transportation
//                 </label>
//             </div>

//             <div className=''>
//                 <form className="row g-3" onSubmit={handleSubmit}>
//                     <div className="col-12 col-lg-2">
//                         <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername1">Pick up Location</label>
//                         <div className="input-group">
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="inlineFormInputGroupUsername1"
//                                 placeholder="Pick up Location ?"
//                                 value={location1}
//                                 onChange={(e) => setLocation1(e.target.value)}
//                             />
//                         </div>
//                     </div>

//                     <div className="col-12 col-lg-2">
//                         <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername2">Drop Location </label>
//                         <div className="input-group">
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="inlineFormInputGroupUsername2"
//                                 placeholder="Drop off Location ?"
//                                 value={location2}
//                                 onChange={(e) => setLocation2(e.target.value)}
//                             />
//                         </div>
//                     </div>

//                     <div className="col-12 col-lg-2">
//                         <label className="visually-hidden" htmlFor="date1">Departure</label>
//                         <div className="input-group">
//                             <input
//                                 className="form-control"
//                                 id="date1"
//                                 placeholder=""
//                                 type="date"
//                                 value={date1}
//                                 onChange={(e) => setDate1(e.target.value)}
//                             />
//                         </div>
//                     </div>

//                     <div className="col-12 col-lg-2">
//                         <label className="visually-hidden" htmlFor="date2">Return </label>
//                         <div className="input-group">
//                             <input
//                                 className="form-control"
//                                 id="date2"
//                                 placeholder="Date"
//                                 type="date"
//                                 value={date2}
//                                 onChange={(e) => setDate2(e.target.value)}
//                             />
//                         </div>
//                     </div>

//                     <div className="col-12 col-lg-2">
//                         <label className="visually-hidden" htmlFor="time1">Pickup-Time</label>
//                         <div className="input-group">
//                             <input
//                                 className="form-control"
//                                 id="time1"
//                                 placeholder="Time"
//                                 type="time"
//                                 value={time1}
//                                 onChange={(e) => setTime1(e.target.value)}
//                             />
//                             <select value={ampm1} onChange={(e) => setAMPM1(e.target.value)}>
//                                 <option value="AM">AM</option>
//                                 <option value="PM">PM</option>
//                             </select>
//                         </div>
//                     </div>

                   

//                     <div className="col-12 col-lg-2">
//                         <label className="visually-hidden" htmlFor="time2">Drop Time</label>
//                         <div className="input-group">
//                             <input
//                                 className="form-control"
//                                 id="time2"
//                                 placeholder="Time"
//                                 type="time"
//                                 value={time2}
//                                 onChange={(e) => setTime2(e.target.value)}
//                             />
//                             <select value={ampm2} onChange={(e) => setAMPM2(e.target.value)}>
//                                 <option value="AM">AM</option>
//                                 <option value="PM">PM</option>
//                             </select>
//                         </div>
//                     </div>

//                     <div className="col-12 col-lg-2 mt-3 pt-3">
//                         <button data-mdb-ripple-init type="submit" className="btn btn-success pr-4 pl-4 p-2">Search Cars</button>
//                     </div>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default Car;
