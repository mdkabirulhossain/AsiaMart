import './Header.css';
import { CiSearch } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='flex justify-between items-center shadow-md h-10'>
            <div>
               <Link to='/'><h1 className='text-orange-500 p-2'>AsiaMart</h1></Link>
            </div>
            <div className='flex items-center nav-search'>
                <input type="text" placeholder='search....' className='pl-1 border border-orange-500 rounded-l-md outline-none h-6' name="" id="" />
                <div className=''>
                    <CiSearch className='bg-orange-500 w-9 h-6 rounded-r-md text-white'></CiSearch>
                </div>
            </div>
            <div className='p-2 flex items-center gap-3'>
                <FaUserAlt />
                <div>
                    <FaCartShopping></FaCartShopping>
                    <div className='bg-orange-500 text-white w-3 h-3 rounded-full p-1 flex items-center justify-center absolute top-2 right-16'>
                        <p className='text-xs'>0</p>
                    </div>
                </div>
                
                <div>
                    <Link to='/login'><button className='bg-orange-500 px-2 rounded-lg'>login</button></Link> 
                </div>
            </div>
        </div>
    );
};

export default Header;