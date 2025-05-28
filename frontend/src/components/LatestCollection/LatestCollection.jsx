import React, { useContext, useEffect, useState } from 'react';
import { ShopContext} from '../../Context/ShopContext';
import ProductItem from '../ProductItem/ProductItem';

const LatestCollection = () => {
    const{product_items} = useContext(ShopContext);
    const[latestProducts, setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(product_items.slice(0, 10));
    },[])

    //  console.log(product_items)
    return (
        <div className='bg-white'>
            <p className='text-center text-3xl text-[#1E255B]'>LATEST COLLECTION</p>
            <p className='text-center text-sm text-[#1E255B]'>Check our best collection. We always try to provide best quality product</p> 
            <div className="grid gap-3 grid-cols-2 my-5 md:grid-cols-3 lg:grid-cols-4">
                {
                    latestProducts.map((item, index)=>(
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}></ProductItem>
                    ))
                }
            </div>
        </div>   

    );
};

export default LatestCollection;