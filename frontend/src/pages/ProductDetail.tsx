import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState, AppDispatch } from '../store';
import { fetchProductById, setProductById } from '../store/reducers/productSlice'
import { FaPlus } from "react-icons/fa6";
import { GrFormSubtract } from "react-icons/gr";
import { Product } from '../productsData';
import LoaderDetailProduct from "../components/LoaderDetailProduct";

const ProductDetail = () => {

    const location = useLocation();
    const dispatch: AppDispatch = useDispatch();
    const product = useSelector((state: RootState) => state.products.product);
    const products = useSelector((state: RootState) => state.products.products);
    const status = useSelector((state: RootState) => state.products.status);

    // Lấy product ID từ query string
    const searchParams = new URLSearchParams(location.search);
    const productId = searchParams.get('id'); // ID dưới dạng string

    const [memory, setMemory] = useState<string>("64GB")
    const [price, setPrice] = useState<number | null>(null);
    
    const getSalePriceByMemory = (product: Product | null, memory: string): number | null => {
        if (!product) return null; // Kiểm tra nếu product là null
        const variant = product.variants.find(variant => variant.memory === memory);
        return variant ? variant.price_sale : null;
    };

    useEffect(() => {
        if(product) {
            setPrice(getSalePriceByMemory(product, memory))
        } 
    }, [product, memory]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
    if (productId) {
        const id = Number(productId);
        if (products.length > 0) {
            // Nếu đã có danh sách sản phẩm, chỉ cần tìm sản phẩm theo id
            dispatch(setProductById(id));
        } else {
            // Nếu chưa có danh sách sản phẩm, gọi fetchProductById để lấy sản phẩm theo id
            dispatch(fetchProductById(id));
        }
    }
    }, [productId, products, dispatch]);

  return (
    <main className="w-full mt-[100px] md:mt-[180px] lg:mt-[140px]">
        <div className="w-[90%] lg:max-w-screen-lg m-auto">
        {status === 'loading' ? (
        <p>Loading...</p>
        ) : product ? (
            <>
            <div className="flex gap-5 items-center">
                <h1>Trang chủ</h1>
                <h1>/</h1>
                <h1>Điện thoại</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-8 mt-10 gap-10">
                <div className="col-span-5 md:col-span-3">
                    <div><img src={product.src} className="lg:h-[400px]"></img></div>
                    <ul className="flex gap-2 mt-10">
                        <li className="border2"><img src={product.src} className="lg:h-[80px]"></img></li>
                        <li className="border2"><img src={product.src} className="lg:h-[80px]"></img></li>
                        <li className="border2"><img src={product.src} className="lg:h-[80px]"></img></li>
                        <li className="border2"><img src={product.src} className="lg:h-[80px]"></img></li>
                    </ul>
                </div>
                <div className="col-span-5 flex flex-col gap-5">
                    <h1 className="font-bold text-[20px]">{product.name}</h1>
                    <div className="flex gap-16">
                        <h3>Thương hiệu: <b>{product.brand}</b></h3>
                        <h3>Mã sản phẩm: <b>DTAAL-{product.id}</b></h3>
                    </div>
                    <h1 className="text-[30px] font-bold text-red-500">{price? price.toLocaleString('vi-VN') : 
                        product.variants[0].price_sale.toLocaleString('vi-VN')}đ</h1>
                    <h3>Bộ nhớ: <b className="text-red-500">{memory}</b></h3>
                    <div className="flex gap-2">
                        <div className={`border3 ${memory==='64GB' ? 'border-red-500' : ''}`} onClick={() => setMemory('64GB')}>64GB</div>
                        <div className={`border3 ${memory==='128GB' ? 'border-red-500' : ''}`} onClick={() => setMemory('128GB')}>128GB</div>
                        <div className={`border3 ${memory==='256GB' ? 'border-red-500' : ''}`} onClick={() => setMemory('256GB')}>256GB</div>
                    </div>
                    <h3>Màu sắc: <b className="text-red-500">Xanh Ngọc</b></h3>
                    <div className="flex">
                        <div className="border1"><GrFormSubtract /></div>
                        <div className="text-[30px] font-bold border-solid border-[1px] border-black w-[100px] text-center">1</div>
                        <div className="border1"><FaPlus /></div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-3 text-white">
                        <div className="px-5 md:px-10 py-2 bg-red-500 rounded cursor-pointer flex flex-col items-center">
                            <h2>THÊM VÀO GIỎ</h2>
                            <h2>Cam kêt chính hãng / đổi trả 24h</h2>
                        </div>
                        <div className="px-10 py-2 bg-green-500 rounded cursor-pointer flex flex-col items-center">
                            <h2>MUA NGAY</h2>
                            <h2>Thanh toán nhanh chóng</h2>
                        </div>
                    </div>
                </div>
            </div>    
             </>
        ) : (
            <LoaderDetailProduct></LoaderDetailProduct>
        )}
        </div>
    </main>
  )
}

export default ProductDetail