import './BookingInformationCard.css'
import { useEffect, useState } from 'react';

const BookingInformationCard = () => {
  const checkInDate = localStorage.getItem('checkIn');
  const checkOutDate = localStorage.getItem('checkOut');
  const totalPrice = localStorage.getItem('totalPrice');

  console.log(totalPrice)

  const [isCancellationProtectionSelected, setIsCancellationProtectionSelected] = useState(false);
  const cancellationProtectionCost = 500; // This can be a fixed value or fetched from elsewhere
  const baseTotalPrice = parseInt(localStorage.getItem('totalPrice') || '0', 10);

  const handleCancellationProtectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCancellationProtectionSelected(e.target.checked);
  };
  
  
  const totalCost = isCancellationProtectionSelected 
  ? baseTotalPrice + cancellationProtectionCost 
  : baseTotalPrice;
  
  useEffect(() => {
    localStorage.setItem('totalPriceWithProtection', totalCost.toString());
  }, [totalCost]);
  
  return (
    <div className='BookinginformationCard-Container'>
      <h2 className='Booking-information-Title'>Booking information</h2>
     
     <div>
      <h3>Check in Date</h3>
      <p>{checkInDate || 'Not selected'} from 12 AM</p>
     </div>

     <div>
      <h3>Check out Date</h3>
      <p>{checkOutDate || 'Not selected'} from 12 AM</p>
     </div>

     <div>
      <h3>Guest</h3>
      <p>2 pers</p>
     </div>

     <div>
      <h3>Cabin Package</h3>
      <p>Deluxe-package</p>
      <p>Exclusive breakfast, 
        premium towels and sheets, champagne, 
        bathtub, sauna, luxary beauty products.
      </p>
    </div>

    <div>
      <h3>Cancellation Protection</h3>
      <p>500 SEK</p>
      <input type="checkbox" 
          checked={isCancellationProtectionSelected}
          onChange={handleCancellationProtectionChange} />
     </div>

     <div>
      <h3>Total Cost:</h3>
      <p>{totalCost} SEK</p>
     </div>

     
    </div>
  )
}

export default BookingInformationCard