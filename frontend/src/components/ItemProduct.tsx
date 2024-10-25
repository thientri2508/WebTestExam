import { IoBagAddOutline } from "react-icons/io5"
import { Product } from '../productsData'
import { Link } from 'react-router-dom'

const ItemProduct = ({ product }: { product: Product }) => {
  return (
    <div className="w-[250px] md:w-[200px] tb:w-[210px] tb1:w-[235px] lg:w-[190px] xl:w-[210px]">
        <Link to={`/product?id=${product.id}`}><div className="cursor-pointer"><img src={product.src}></img></div></Link>
        <Link to={`/product?id=${product.id}`}><p className="font-semibold mt-5 cursor-pointer">{product.name}</p></Link>
        <div className="flex justify-between items-center mt-7">
            <div>
            <p className="text-red-500 font-bold text-[20px]">{product.variants[0].price_sale.toLocaleString('vi-VN')}đ</p>
            <p className="line-through text-gray-500">{product.variants[0].price.toLocaleString('vi-VN')}đ</p>
            </div>
            <IoBagAddOutline size='30' className="cursor-pointer" />
        </div>
        </div>
  )
}

export default ItemProduct