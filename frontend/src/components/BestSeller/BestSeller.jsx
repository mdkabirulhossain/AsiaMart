import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import ProductItem from '../ProductItem/ProductItem';

const BestSeller = () => {
    const{product_items} = useContext(ShopContext);
    const[bestSeller, setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProduct = product_items.filter(item=>item.bestseller);
        setBestSeller(bestProduct.slice(0,5));
    }, [])

    return (
        <div className='my-10'>
            <div>
                <p className='text-center text-3xl'>BEST SELLER</p>
                <p className='text-center text-sm'>Here you find our best selling products</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-10'>
                {
                    bestSeller.map(item =><ProductItem key={item.id} id={item._id} name={item.name} image={item.image} price={item.price} ></ProductItem>)
                }
            </div>
        </div>
    );
};

export default BestSeller;