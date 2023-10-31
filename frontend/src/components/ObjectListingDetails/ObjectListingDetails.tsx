import './ObjectListingDetails.css'

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RootState } from 'src/app/store';
import { useDispatch, useSelector } from 'react-redux';
import { getRentalObjectById } from '../../features/rentalObject/rentalObjectSlice';

// import Logo from '../../assets/bed.svg'

const ObjectListingDetails = () => {
  const dispatch = useDispatch();
  const { rentalObject, loading, error } = useSelector((state: RootState) => state.rentalObject) as {
    rentalObject: { name: string, imageURL: string } | null;
    loading: boolean;
    error: string | null;
  };
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchPackageData = async () => {
        dispatch(getRentalObjectById(id) as any); 
      };

      fetchPackageData();
    }
  }, [id]);

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
      {rentalObject && (
        <div>
          <img className='RentalObject-Details-Image' src={rentalObject.imageURL} alt="" />
        </div>
       )}
        <div>
          <h2>Facilities</h2>
        </div>
    </>
  );
};

export default ObjectListingDetails;
