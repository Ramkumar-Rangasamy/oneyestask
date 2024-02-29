import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useNavigate } from "react-router-dom";

const ConformBooking = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    cardNumber: '',
    cardHolderName: '',
    expires: '',
    cvv: '',
    address: '',
    city: '',
    pincode: '',
    state: '',
    country: '',
    email: '',
    phoneNumber: ''
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    cardNumber: '',
    cardHolderName: '',
    expires: '',
    cvv: '',
    address: '',
    city: '',
    pincode: '',
    state: '',
    country: '',
    email: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2001/confirm-booking', formData);
      console.log(response.data); // Booking confirmed
      // Handle success (e.g., show a success message to the user)
      Swal.fire({
        title: 'Your Rooms Booking  ',
        text: 'Booking Successful',
        icon: 'success'
      });
      setFormData({
        firstName: '',
        lastName: '',
        cardNumber: '',
        cardHolderName: '',
        expires: '',
        cvv: '',
        address: '',
        city: '',
        pincode: '',
        state: '',
        country: '',
        email: '',
        phoneNumber: ''
      });
      setTimeout(() => {
        navigate("/home");
      }, 4000);
    } catch (error) {
      console.error('Error confirming booking:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    for (const key in formData) {
      if (!formData[key]) {
        errors[key] = `Please enter ${key}`;
        isValid = false;
      }
    }

    setFormErrors(errors);
    return isValid;
  };

  return (
    <div className='container pb-5 color-back'>
      <h1 className='text-center pt-4'>Confirm Booking</h1>
      <form onSubmit={handleSubmit}>

        <div className='pt-4'>
          <h4>Traveler Details</h4>
          <div className="row p-4">
            <div className="col-md-6 mb-3">
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="form-control" placeholder="First Name" required />
              {formErrors.firstName && <span className="text-danger">{formErrors.firstName}</span>}
            </div>
            <div className="col-md-6 mb-3">
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-control" placeholder="Last Name" required />
              {formErrors.lastName && <span className="text-danger">{formErrors.lastName}</span>}
            </div>
          </div>
        </div>

        <div className='pt-4'>
          <h4>Credit / Debit Card</h4>
          <div className="row p-4">
            <div className="col-md-6 mb-3">
              <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} className="form-control" placeholder="Card Number" required />
              {formErrors.cardNumber && <span className="text-danger">{formErrors.cardNumber}</span>}
            </div>
            <div className="col-md-6 mb-3">
              <input type="text" name="cardHolderName" value={formData.cardHolderName} onChange={handleChange} className="form-control" placeholder="Card Holder's Name" required />
              {formErrors.cardHolderName && <span className="text-danger">{formErrors.cardHolderName}</span>}
            </div>
            <div className="col-md-6 mb-3">
              <input type="text" name="expires" value={formData.expires} onChange={handleChange} className="form-control" placeholder="Expires (MM/YYYY)" required />
              {formErrors.expires && <span className="text-danger">{formErrors.expires}</span>}
            </div>
            <div className="col-md-6 mb-3">
              <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} className="form-control" placeholder="CVV" required />
              {formErrors.cvv && <span className="text-danger">{formErrors.cvv}</span>}
            </div>
          </div>
        </div>

        <div className='pt-4'>
          <h4>Billing & Contact Information</h4>
          <div className="row p-4">
            <div className="col-md-6 mb-3">
              <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control" placeholder="Address" required />
              {formErrors.address && <span className="text-danger">{formErrors.address}</span>}
            </div>
            <div className="col-md-6 mb-3">
              <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-control" placeholder="City" required />
              {formErrors.city && <span className="text-danger">{formErrors.city}</span>}
            </div>
            <div className="col-md-4 mb-3">
              <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} className="form-control" placeholder="Pincode" required />
              {formErrors.pincode && <span className="text-danger">{formErrors.pincode}</span>}
            </div>
            <div className="col-md-4 mb-3">
              <input type="text" name="state" value={formData.state} onChange={handleChange} className="form-control" placeholder="State" required />
              {formErrors.state && <span className="text-danger">{formErrors.state}</span>}
            </div>
            <div className="col-md-4 mb-3">
              <input type="text" name="country" value={formData.country} onChange={handleChange} className="form-control" placeholder="Country" required />
              {formErrors.country && <span className="text-danger">{formErrors.country}</span>}
            </div>
            <div className="col-md-6 mb-3">
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Email" required />
              {formErrors.email && <span className="text-danger">{formErrors.email}</span>}
            </div>
            <div className="col-md-6 mb-3">
              <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="form-control" placeholder="Phone Number" required />
              {formErrors.phoneNumber && <span className="text-danger">{formErrors.phoneNumber}</span>}
            </div>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary mt-3" onClick={validateForm}>Confirm Booking</button>
        </div>
      </form>
    </div>
  );
};

export default ConformBooking;
