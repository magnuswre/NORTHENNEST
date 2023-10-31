import './PackageCard.css';
import { RootState } from '../../../app/store';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPackages } from '../../../features/_package/packagesSlice';
import PackageCardDetails from '../PackageCardDetails/PackageCardDetails';

const PackageCard = () => {
  const { packages, loading, error } = useSelector((state: RootState) => state.packages);
  const dispatch = useDispatch();

  console.log(packages)

  useEffect(() => {
    dispatch(getAllPackages() as any);
  }, [dispatch]);

  return (
    <div className="Home-PackageCard-container">
      {loading && <p>Loading ...</p>}
      {error && <p>{error}</p>}

      {packages.length > 0 ? (
        packages.map((_package :{ _id: string, name: string, imageURL: string, description: string }) => (
         <Link className="packageCard-details" to={`/packagedetails/${_package._id}`} key={_package._id}>
             <img className='Home-Package-Images' src={_package.imageURL} alt="" />
             <p>{_package.name}</p>
             <p>{_package.description}</p>
            <PackageCardDetails  key={_package._id} />
          </Link>
        ))
      ) : (
        <h2>No Packages to show</h2>
      )}
    </div>
  );
};

export default PackageCard;
