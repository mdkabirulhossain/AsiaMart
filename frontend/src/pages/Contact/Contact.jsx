import React from 'react';
import Title from '../../components/Title/Title';
import contuctimg from '../../assets/Contuct-us.avif'
const Contact = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-10 border-t'>
                <Title text1={"CONTACT"} text2={"US"}></Title>
            </div>

            <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
                <img className='w-full md:max-w-[480px]' src={contuctimg} alt="" />
                <div className='flex flex-col justify-center items-start gap-6'>
                    <p className='font-semibold text-xl text-gray-600'>Our Store</p>
                    <p className=' text-gray-600'>6/2 Kazi Nazrul Islam Rd, Dhaka 1207</p>
                    <p className=' text-gray-600'>Tel: 017785646** <br /> Email: asiamart@gmail.com</p>
                    <p className='font-semibold text-xl text-gray-600'>Carrers</p>
                    <p className=' text-gray-600'>Learn more about our teams and job openings</p>
                    <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;