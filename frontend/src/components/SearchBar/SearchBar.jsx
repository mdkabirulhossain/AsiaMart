import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { CiMedicalCross, CiSearch } from 'react-icons/ci';
import { IoMdClose } from "react-icons/io";
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        // console.log(location);
        //Search bar only show for collection
        if(location.pathname.includes('collection')){
            setVisible(true);
        } else{
            setVisible(false);
        }
    },[location])

    return showSearch && visible ? (
        <div className='flex justify-center items-center nav-search  mt-5'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='search....' className='text-xs pl-1 border border-orange-500 rounded-l-full outline-none h-6 w-1/2' name="" id="" />
            <div className=''>
                <CiSearch className='bg-orange-500 w-12 h-6 rounded-r-full text-white'></CiSearch>
            </div>
            <IoMdClose onClick={()=>setShowSearch(false)}></IoMdClose>
        </div>
    ) : null;
};

export default SearchBar;