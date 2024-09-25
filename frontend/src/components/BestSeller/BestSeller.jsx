import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';

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
                <p className='center text-3xl'>BEST SELLER</p>
                <p className='center text-sm'>Here you find our best selling products</p>
            </div>
            
        </div>
    );
};

export default BestSeller;