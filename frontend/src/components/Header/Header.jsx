import './Header.css';
import { CiSearch } from "react-icons/ci";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div className='flex justify-between items-center shadow-md h-14'>
            <div>
                <Link to='/'><h1 className='text-orange-500 p-2'>AsiaMart</h1></Link>
            </div>
            {/* <div className='flex items-center nav-search'>
                <input type="text" placeholder='search....' className='pl-1 border border-orange-500 rounded-l-md outline-none h-6' name="" id="" />
                <div className=''>
                    <CiSearch className='bg-orange-500 w-9 h-6 rounded-r-md text-white'></CiSearch>
                </div>
            </div> */}
            <div className="menu-section flex justify-between items-center gap-4">
                <NavLink to='/' className="flex flex-col gap-0.2 option">
                    <p className='text-xs text-black'>HOME</p>
                    <hr className=' bg-orange-600 h-[2px] hidden' />
                </NavLink>
                <NavLink to='/collection' className="flex flex-col gap-0.2">
                    <p className='text-xs text-black'>COLLECTION</p>
                    <hr className="bg-orange-600 h-[2px] hidden" />
                </NavLink>
                <NavLink to='/about' className="flex flex-col gap-0.2">
                    <p className='text-xs text-black'>ABOUT</p>
                    <hr className=' bg-orange-600 h-[2px] hidden' />
                </NavLink>
                <NavLink to='/contact' className="flex flex-col gap-0.2">
                    <p className='text-xs text-black'>CONTACT</p>
                    <hr className=' bg-orange-600 h-[2px] hidden' />
                </NavLink>
            </div>
            <div className='p-2 flex items-center gap-3'>
                <div className='cursor-pointer'>
                    <FaSearch></FaSearch>
                </div>
                <div className='group relative'>

                    <FaUserAlt />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-1 shadow-md bg-orange-500'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 text-black '>
                            <p className="cursor-pointer text-sm hover:text-white">My profile</p>
                            <p className="cursor-pointer text-sm hover:text-white">Orders</p>
                            <p className="cursor-pointer text-sm hover:text-white">Logout</p>
                        </div>
                    </div>


                </div>

                <div className='relative cursor-pointer'>
                    <Link to='/cart'>
                        <FaCartShopping></FaCartShopping>
                        <div className='bg-orange-500 text-white w-3 h-3 rounded-full p-1 flex items-center justify-center absolute -top-2 right-0'>
                            <p className='text-xs'>0</p>
                        </div>
                    </Link>
                </div>

                {/* <div>
                    <Link to='/login'><button className='bg-orange-500 px-2 rounded-lg'>login</button></Link>
                </div> */}
            </div>
        </div>
    );
};

export default Header;