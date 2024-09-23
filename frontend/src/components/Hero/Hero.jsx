import React from 'react';
import './Hero.css'
import img from '../../assets/banner/Best_Sell.jpg'
const Hero = () => {
    return (
        <div className='hero-section flex justify-between items-center m-10 border-2 border-orange-600'>
            <div className="hero-left flex flex-col items-center w-1/2 ">
                <p className='text-left'>OUR BEST SELL PRODUCT</p>
                <p className='text-left'>Latest Arrival</p>
                <p className='text-left'>SHOP NOW</p>
            </div>
            <div className=' w-1/2 h-[300px]'>
                <img src={img} alt="" className='w-full h-full' />
            </div>
        </div>
    );
};

export default Hero;