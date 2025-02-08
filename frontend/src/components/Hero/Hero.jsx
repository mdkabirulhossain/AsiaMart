import React from 'react';
import './Hero.css'
import img from '../../assets/banner/Best_Sell.jpg'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='hero-section flex justify-between items-center m-10 border-2 border-orange-600'>
            <div className="hero-left flex flex-col items-center w-1/2 ">
                <p className='text-sm'>OUR BEST SELL PRODUCT</p>
                <p className='text-5xl font-bold'>Latest Arrival</p> 
                <Link to="/collection"><p className='text-sm bg-orange-500 p-2 rounded-md mt-2'>SHOP NOW</p></Link>

            </div>
            <div className='hero-right w-1/2 h-[400px]'>
                <img src={img} alt="" className='w-full h-full' />
            </div>
        </div>
    );
};

export default Hero;