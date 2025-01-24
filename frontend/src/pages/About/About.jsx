import React from 'react';
import Title from '../../components/Title/Title';
import img from '../../assets/About_img.jpg'

const About = () => {
    return (
        <div>
            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={'ABOUt'} text2={"US"}></Title>
            </div>
            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='sm:pl-20' src={img} alt="" />

                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum neque exercitationem optio. Iusto, minima! Consectetur minima repudiandae temporibus assumenda a nesciunt illo necessitatibus deserunt molestias iure officia omnis, tempora ratione ducimus dolore voluptas consequuntur dolor perferendis, nam quasi totam beatae!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum neque exercitationem optio. Iusto, minima! Consectetur minima repudiandae temporibus assumenda a nesciunt illo necessitatibus deserunt molestias iure officia omnis, tempora ratione ducimus dolore voluptas consequuntur dolor perferendis, nam quasi totam beatae!</p>
                    <strong className='text-gray-800'>Our Mission</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias fugiat ad excepturi distinctio nam. Perferendis deserunt placeat doloremque repudiandae harum.</p>
                </div>
            </div>
            <div className='text-4xl py-4'>
                <Title text1={"WHY"} text2={"CHOOSE US"}></Title>
            </div>
            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-10 flex flex-col gap-5'>
                    <strong>Queality Assurance</strong>
                    <p className='text-gray-600'>We ensure quality assurance through rigorous testing, addressing functionality, usability, performance, and security, delivering reliable, user-friendly websites.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-10 flex flex-col gap-5'>
                    <strong>Usefulness</strong>
                    <p className='text-gray-600'>We prioritize convenience by ensuring easy navigation, seamless functionality, and quick access, delivering a hassle-free and efficient user experience.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-10 flex flex-col gap-5'>
                    <strong>Our Service</strong>
                    <p className='text-gray-600'>Our e-commerce store offers high-quality products, seamless shopping experiences, secure payments, fast delivery, and exceptional customer service.</p>
                </div>
            </div>
        </div>
    );
};

export default About;