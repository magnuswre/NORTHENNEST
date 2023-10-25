import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RootState } from 'src/app/store';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../features/product/productSlice';

const ObjectListingDetails = () => {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state: RootState) => state.product) as {
    product: { name: string } | null;
    loading: boolean;
    error: string | null;
  };
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchPackageData = async () => {
        dispatch(getProductById(id) as any); 
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
      <p>hej</p>
      {loading && <p>Loading...</p>}
      {product && (
        <div>
          <h2>{product.name}</h2>
        </div>
      )}
    </>
  );
};

export default ObjectListingDetails;
