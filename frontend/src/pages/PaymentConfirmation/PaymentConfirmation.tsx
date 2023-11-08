import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import './PaymentConfirmation.css';
import check from '../../assets/check.svg';
import { getRentalObjectById } from '../../features/order/orderSlice';
import { RootState } from 'src/app/store';

const PaymentConfirmation = () => {
  const dispatch = useDispatch();
  const { orderId } = useParams(); 
  const order = useSelector((state: RootState) => state.order.order); 

  useEffect(() => {
    if (orderId) {
      dispatch(getRentalObjectById(orderId));
    }
  }, [orderId, dispatch]);

  const totalAmount = order?.price ?? 'Loading...';
  const email = order?.email ?? 'Loading...';
  const bookingReference = order?.bookingReference ?? 'Loading...';

  return (
    <div className='PaymentConfirmation-Container'>
      <div className='PaymentConfirmation-top-field'></div>
      <img src={check} alt="Checkmark" />
      <h3>THANK YOU FOR YOUR PAYMENT!</h3>
      <p>Total amount:</p>
      <p>{totalAmount} SEK</p>
      <p>Your booking reference:</p>
      <p>{bookingReference}</p>
      <p>A receipt and booking confirmation for this order has been sent to this email:</p>
      <p>{email}</p>
    </div>
  );
};

export default PaymentConfirmation;
