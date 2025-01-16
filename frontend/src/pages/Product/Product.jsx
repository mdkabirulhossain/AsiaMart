import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { FaStar } from 'react-icons/fa6';


const Product = () => {
    const {id} = useParams();
    const{product_items, currency} = useContext(ShopContext);
    const[productData, setProductData] = useState(false);
    const[images, setImages] = useState('');
    
    const fetchProductData = async()=>{

        product_items.map(item =>{
            if(item._id === id){
                setProductData(item);
                setImages(item.images[0]);
                
                return null;
            }
        })
    }
    useEffect(()=>{
        fetchProductData();
    }, [id])

    return productData? (
        <div className='border-t-2 pt-10 transition-opacity ease in duration-500 opacity-100'>
            {/* Product Data  */}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
                {/* product Images  */}
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                            {
                                productData?.images?.map((item, index)=><img onClick={()=>setImages(item)}
                                src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                                ></img>)
                            }
                    </div>
                    <div className='w-full sm:w-[80%]'>
                            <img className='w-full h-auto' src={images} alt="" />
                    </div>
                </div>
                    {/* Product info  */}
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <FaStar className='text-red-600'></FaStar>
                        <FaStar className='text-red-600'></FaStar>
                        <FaStar className='text-red-600'></FaStar>
                        <FaStar className='text-red-600'></FaStar>
                        <FaStar className='text-red-600'></FaStar>

                    </div>
                    <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
                    <p className='mt-5 text-gray-500 md: w-4/5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quasi soluta? Libero quaerat excepturi nostrum iste eos hic, sit assumenda possimus voluptas iure quasi sint voluptates laudantium ut impedit enim!</p>
                    
                </div>
            </div>
        </div> 
    ):
    <div className='opacity-0'>


    </div>
};

export default Product;