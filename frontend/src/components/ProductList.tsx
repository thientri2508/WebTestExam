import ItemProduct from "../components/ItemProduct"
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/reducers/productSlice';
import { RootState, AppDispatch } from '../store';
import { Product } from "../productsData";
import Loader from "./Loader";
  
  const ProductList: React.FC = () => {

    const products_loading = Array.from({ length: 8 });

    const dispatch: AppDispatch = useDispatch();

    // Lấy danh sách sản phẩm và trạng thái từ Redux store
    const products = useSelector((state: RootState) => state.products.products);
    const status = useSelector((state: RootState) => state.products.status);

    useEffect(() => {
        if (status === 'idle') {
        dispatch(fetchProducts())
        }
    }, [status, dispatch]);

  return (
    <div>
      {status === 'loading' && (
        <ul className="flex flex-col md:flex-row flex-wrap gap-16 md:gap-10 w-full items-center">
          {products_loading.map((_, index) => (
            <li key={index}><Loader></Loader></li>
          ))}
        </ul>
      )}
      {status === 'succeeded' && (
        <ul className="flex flex-col md:flex-row flex-wrap gap-16 md:gap-10 w-full items-center">
          {products.map((product: Product) => (
            <li key={product.id}><ItemProduct product={product}></ItemProduct></li>
          ))}
        </ul>
      )}
      {status === 'failed' && <p>Failed to load products.</p>}    
    </div>
  )
}

export default ProductList