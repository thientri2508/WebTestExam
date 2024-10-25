import { RxTriangleDown } from "react-icons/rx";
import { FaRegCircleUser } from "react-icons/fa6"
import { MdOutlineShoppingBag } from "react-icons/md"

interface NavbarProps {
    openNavbar: boolean
}

const Navbar: React.FC<NavbarProps> = ({ openNavbar }) => {
  return (
    <nav className={`${openNavbar ? 'w-[80%] overflow-auto' : 'w-0 overflow-hidden'} md:w-full rounded py-3 mini:py-8 md:py-0 fixed mt-[80px] top-0 z-10 bg-red-500 transition-all duration-500`}>
        <ul className="navbar">
            <li className="w-[250px] md:w-auto">Trang chủ</li>
            <li className="w-[250px] md:w-auto">Giới thiệu</li>
            <li className="w-[250px] md:w-auto">
                <ul className="flex items-center gap-1">
                    <li>Sản phẩm</li>
                    <li><RxTriangleDown /></li>
                </ul>
            </li>
            <li className="w-[250px] md:w-auto">
                <ul className="flex items-center gap-1">
                    <li>Tin mới nhất</li>
                    <li><RxTriangleDown /></li>
                </ul>
            </li>
            <li className="w-[250px] md:w-auto">Câu hỏi thường gặp</li>
            <li className="w-[250px] md:w-auto">Tuyển dụng</li>
            <li className="w-[250px] md:w-auto">Liên hệ</li>
            <li className='md:hidden w-[250px]'>
                <ul className='flex items-center gap-3'>  
                    <li><FaRegCircleUser size="35" color='white' /></li>
                    <li className='font-bold text-white text-[18px]'>Đăng nhập</li>
                </ul>
            </li>
            <li className='md:hidden w-[250px]'>
                <ul className='flex items-center gap-3'>  
                    <li><MdOutlineShoppingBag size="35" color='white' /></li>
                    <li className='font-bold text-white text-[18px]'>Giỏ hàng</li>
                </ul>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar