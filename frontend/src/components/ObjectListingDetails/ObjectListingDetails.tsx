import './ObjectListingDetails.css';
import { useEffect, useState } from 'react'; // Import React if it's not already imported
import { useParams } from 'react-router-dom';
import { RootState } from 'src/app/store';
import { useDispatch, useSelector } from 'react-redux';
import { getRentalObjectById } from '../../features/rentalObject/rentalObjectSlice';
import { getAllFacilities } from '../../features/facility/facilitiesSlice';
import ReviewObjectListingCard from './ReviewObjectListingCard/ReviewObjectListingCard';
import ReservationInfoCard from './ReservationInfoCard';

const ObjectListingDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { rentalObject, loading, error } = useSelector((state: RootState) => state.rentalObject) as {
    rentalObject: { name: string, imageURL: string, RentalObjectPackage: string[], price: number } | null;
    loading: boolean;
    error: string | null;
  };
  const pricePerNight = rentalObject?.price;
   const [facilities, setFacilities] = useState<{ _id: string; text: string }[]>([]);
   useEffect(() => {
     if (pricePerNight != null) {
       console.log('Setting pricePerNight in localStorage:', pricePerNight);
       localStorage.setItem('pricePerNight', pricePerNight.toString());
     }
   }, [pricePerNight]);
   
  useEffect(() => {
    if (id) {
      const fetchRentalObjectData = async () => {
        dispatch(getRentalObjectById(id) as any);
      };

      fetchRentalObjectData();
    }
  }, [id, dispatch]);


  useEffect(() => {
    const fetchFacilities = async () => {
      if (rentalObject) {
        const facilityResponse = await dispatch(getAllFacilities() as any);
        if (!facilityResponse.error) {
          setFacilities(facilityResponse.payload);
        }
      }
    };

    fetchFacilities();
  }, [rentalObject, dispatch]);

  if (error) {
    return (
      <div>
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      {rentalObject ? (
        <div>
          <img className='RentalObject-Details-Image' src={rentalObject.imageURL} alt="" />
          <p> {rentalObject.price}</p>
        </div>
      ) : (
        <div>
          <h2>Rental Object not found</h2>
        </div>
      )}
      <div>
        <h2>Facilities</h2>
       
        {facilities.length > 0 ? (
          facilities.map((facility) => (
            <p key={facility._id}>{facility.text}</p>
          ))
        ) : (
          <h2>No Facilities to show</h2>
        )}
      </div>

      <div className='Reservation-Info-Area'>
        <ReservationInfoCard />
      </div>
      <div>
        <h2>Included in the package</h2>
      </div>
      <div className='RentalObjectPackage'>
        <ul>
          {rentalObject && rentalObject.RentalObjectPackage && rentalObject.RentalObjectPackage.length > 0 ? (
            rentalObject.RentalObjectPackage.map((_package, index) => (
              <li className='RentalObjectPackage-ListItem' key={index}>{_package}</li>
            ))
          ) : (
            <h2>No packages to show</h2>
          )}
        </ul>
      </div>

      <ReviewObjectListingCard />
    </>
  );
};

export default ObjectListingDetails;
