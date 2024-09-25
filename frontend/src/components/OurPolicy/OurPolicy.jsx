import React from 'react';
import { RiCustomerService2Fill, RiExchange2Fill, RiExchangeFundsLine } from "react-icons/ri";


const OurPolicy = () => {
    return (
        <div className='flex flex-col justify-around md:flex-row gap-10 my-10'>
            <div className='flex items-center flex-col'>
                <RiExchange2Fill className='w-12 h-12'/>
                <p className='text-center text-black font-bold text-xl'>Easy Exchange</p>
                <p className='text-center text-sm text-black'>We offer hassle free exchange policy</p>
            </div>
            <div className='flex items-center flex-col'>
                
                <RiExchangeFundsLine className='w-12 h-12'/>
                <p className='text-center text-black font-bold text-xl'>7 Days Return Policy</p>
                <p className='text-center text-sm text-black'>We provide 7 days free return policy</p>
            </div>
            <div className='flex items-center flex-col'>
                <RiCustomerService2Fill className='w-12 h-12'></RiCustomerService2Fill>
                <p className='text-center text-black font-bold text-xl'>Customer Support</p>
                <p className='text-center text-sm text-black'>We provide 24/7 nonstop Customer support</p>
            </div>
        </div>
    );
};

export default OurPolicy;