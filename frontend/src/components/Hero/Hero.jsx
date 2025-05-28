import React from 'react';
import './Hero.css'
import img from '../../assets/banner/Best_Sell.jpg'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='hero-section flex justify-between items-center my-10 '>
            <div className="hero-left flex flex-col items-center w-1/2 ">
                <p className='text-sm text-[#1E255B]'>OUR BEST SELL PRODUCT</p>
                <p className='text-5xl font-bold text-[#1E255B]'>Latest Arrival</p>
                <Link to="/collection"><p className='text-sm bg-[#1E255B] p-2 rounded-md mt-2 text-white'>SHOP NOW</p></Link>

            </div>
            {/* <div className='hero-right w-1/2 h-[400px]'>
                <img src={img} alt="" className='w-full h-full' />
            </div> */}
            <div className='hero-right w-1/2 h-[400px] flex items-center justify-center'>
                <img src={img} alt="" className='w-full h-full object-contain' />
            </div>
        </div>
    );
};

export default Hero;