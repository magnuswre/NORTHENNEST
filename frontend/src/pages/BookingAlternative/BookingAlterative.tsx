import { Link, useNavigate, useParams } from 'react-router-dom'
import './BookingAlternative.css'

const BookingAlterative = () => {
     const navigate = useNavigate()
     const { id } = useParams();

    const handleReserveClick = () => {
        // navigate(`/bookingalternative/${id}`)
        navigate(`/order/${id}`);
        // localStorage.setItem('totalPrice', totalCost.toString());
      };

  return (
    <div>Booking Alterative:
        <div>
        <button className="ReservationInfoCard-Btn" onClick={handleReserveClick}>Continue as Guest</button>
        </div>

    <div>
      <Link to="/login">Already Have an Account?</Link>
    </div>
    <div>
    <Link to="/register">Create Account?</Link> 
    </div>
    </div>
  )
}

export default BookingAlterative