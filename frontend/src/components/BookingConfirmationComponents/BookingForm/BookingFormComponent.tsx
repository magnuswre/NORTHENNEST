import { useDispatch } from 'react-redux';
import './BookingFormComponent.css'
import { checkIfEmpty } from './Validation';
import { useState } from 'react';
import { createOrder } from '../../../features/order/orderSlice';
import { useNavigate, useParams } from 'react-router-dom';

const initState = {
  fullName: '',
  email: '',
  phoneNumber: '',
  streetAddress: '',
  stateProvince: '',
  city: '',
  paymentMethod: 'visa/mastercard'
};

const BookingFormComponent = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>();
  console.log(id)
  const checkOut = localStorage.getItem('checkOut')
  const totalPriceWithProtection = localStorage.getItem('totalPriceWithProtection')
  const checkIn = localStorage.getItem('checkIn')

  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initState);

  const [error, setError] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    streetAddress: '',
    stateProvince: '',
    city: ''
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "radio" ? (checked ? value : prevData.paymentMethod) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (checkIfEmpty(formData.fullName)) {
      setError((data) => ({
        ...data,
        fullName: 'You need to enter your fullName',
      }));
    }

    if (checkIfEmpty(formData.email)) {
      setError((data) => ({
        ...data,
        email: 'You need to enter an email',
      }));
    }

    if (checkIfEmpty(formData.phoneNumber)) {
      setError((data) => ({
        ...data,
        phoneNumber: 'You need to enter a phone number',
      }));
    }

    if (checkIfEmpty(formData.streetAddress)) {
      setError((data) => ({
        ...data,
        streetAddress: 'You need to enter a street Address',
      }));
    }

    if (checkIfEmpty(formData.stateProvince)) {
      setError((data) => ({
        ...data,
        tateProvince: 'You need to enter a state/Province',
      }));
    }

    if (checkIfEmpty(formData.city)) {
      setError((data) => ({
        ...data,
        city: 'You need to enter a city',
      }));
    }

   // Convert totalPriceWithProtection to a number, providing a fallback of 0
  const priceValue = parseFloat(totalPriceWithProtection ?? '0');

  if (!isNaN(priceValue) && id) { // Check if priceValue is a number and id is not undefined
    const orderData = {
      rentalObject: id,
      bookingDateArrival: checkIn ?? new Date().toISOString(), // Provide a default value if null
      bookingDateDeparture: checkOut ?? new Date().toISOString(), // Provide a default value if null
      price: priceValue, // Use the parsed price value
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      streetAddress: formData.streetAddress,
      stateProvince: formData.stateProvince,
      city: formData.city,
      paymentMethod: formData.paymentMethod,
      status: 'pending',
      guest: 2
    };
    console.log(orderData)
    // Dispatch the action and handle the promise
    const resultAction = await dispatch(createOrder(orderData));

    // Check if the action is fulfilled and payload is structured as expected
    if (createOrder.fulfilled.match(resultAction)) {
      // Check if the payload contains 'order' and '_id' is defined
      if (resultAction.payload && 'order' in resultAction.payload && '_id' in resultAction.payload.order) {
        const newOrderId = resultAction.payload.order._id; // Extract the _id
        navigate(`/paymentconfirmation/${newOrderId}`); // Navigate using the _id
      } else {
        console.error('Order ID was not present in the response payload.');
      }
    } else {
      console.error('Order creation failed.', resultAction.error);
    }
  } else {
    console.error('Total price is not a valid number or rental object ID is missing.');
  }
};

  // 

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName"><h3> Full Name:</h3> </label>
          <input type="text" name="fullName" className="input" id="fullName" value={formData.fullName} onChange={handleChangeInput} />
          <p className="error-text">{error.fullName}</p>
        </div>

        <div className="form-group">
          <label htmlFor="email"><h3> Email:</h3> </label>
          <input type="text" name="email" className="input" id="email" value={formData.email} onChange={handleChangeInput} />
          <p className="error-text">{error.email}</p>
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber"><h3>Phone Number:</h3> </label>
          <input type="number" name="phoneNumber" className="input" id="phoneNumber" value={formData.phoneNumber} onChange={handleChangeInput} />
          <p className="error-text">{error.phoneNumber}</p>
        </div>

        <div className="form-group">
          <label htmlFor="streetAddress"><h3>Address:</h3> </label>
          <input
            type="text"
            name="streetAddress"
            className="input"
            id="streetAddress"
            value={formData.streetAddress}
            onChange={handleChangeInput}
            placeholder="Enter your street address"
          />
          <p className="error-text">{error.streetAddress}</p>
        </div>

        <div className="form-group">
          {/* <label htmlFor="stateProvince"></label> */}
          <input
            type="text"
            name="stateProvince"
            className="input"
            id="stateProvince"
            value={formData.stateProvince}
            onChange={handleChangeInput}
            placeholder="Enter your state or province"
          />
          <p className="error-text">{error.stateProvince}</p>
        </div>

        <div className="form-group">
          {/* <label htmlFor="city"></label> */}
          <input
            type="text"
            name="city"
            className="input"
            id="city"
            value={formData.city}
            onChange={handleChangeInput}
            placeholder="Enter your city"
          />
          <p className="error-text">{error.city}</p>
        </div>
        <div className='Payment-Methods'>
          <div className='visaMastercard'>
            <p>Visa/Mastercard</p>
            <input
              type="radio"
              name="paymentMethod"
              id="visaMastercard"
              value="visa/mastercard"
              checked={formData.paymentMethod === "visa/mastercard"}
              onChange={handleChangeInput}

            />
          </div>
          <div className='Klarna'>
            <p>Klarna</p>
            <input
              type="radio"
              name="paymentMethod"
              id="Klarna"
              value="Klarna"
              checked={formData.paymentMethod === "Klarna"}
              onChange={handleChangeInput}
            />
          </div>
          <div className='PayPal'>
            <p>PayPal</p>
            <input
              type="radio"
              name="paymentMethod"
              id="PayPal"
              value="PayPal"
              checked={formData.paymentMethod === "PayPal"}
              onChange={handleChangeInput}
            />
          </div>
          <div className='AmericanExpress'>
            <p>American Express</p>
            <input
              type="radio"
              name="paymentMethod"
              id="AmericanExpress"
              value="American Express"
              checked={formData.paymentMethod === "American Express"}
              onChange={handleChangeInput}
            />
          </div>
        </div>

        <button className="Confirm-Booking-Btn">Confirm Booking</button>
      </form>

      <div className="Confirm-Booking-Btn-Container">

      </div>
    </div>
  )
}

export default BookingFormComponent