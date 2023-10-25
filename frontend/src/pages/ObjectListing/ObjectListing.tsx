import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from 'src/app/store';
import { getAllProducts } from '../../features/product/productsSlice';
import ObjectListingDetails from '../ObjectDetail/ObjectDetail';

const ObjectListing = () => {
  const { products, loading, error } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPackageData = async () => {
      dispatch(getAllProducts() as any);
    };

    fetchPackageData();
  }, []);

  return (
    <div className="Home-Heading2">
      {loading && <p>Loading ...</p>}
      {error && <p>{error}</p>}

      {products.length > 0 ? (
        products.map((product: { _id: string }) => (
          <Link to={`productdetails/${product._id}`} key={product._id}>
            <ObjectListingDetails key={product._id} />
          </Link>
        ))
      ) : (
        <h2>No products to show</h2>
      )}
    </div>
  );
};

export default ObjectListing;
