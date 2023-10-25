import './PackageCard.css';
import { RootState } from '../../../app/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPackages } from '../../../features/_package/packagesSlice';

const PackageCard = () => {
  const { packages, loading, error } = useSelector((state: RootState) => state.packages);
  console.log(packages);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPackageData = async () => {
      dispatch(getAllPackages() as any);
    };
    
    fetchPackageData();
  }, []);

  
  return (
    <div className="Home-Heading2">
    {/* {loading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>Error: {error}</p>
    ) : (
      packages.map((_package: { id: number, name: string }) => (
        <div key={_package.id || _package.name}>
          <h2>{_package.name}</h2>
        </div>
      ))
    )} */}
  </div>
  )
}

export default PackageCard