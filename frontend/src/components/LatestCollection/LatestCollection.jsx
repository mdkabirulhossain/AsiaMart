import React, { useContext, useEffect, useState } from 'react';
import { ShopContext} from '../../Context/ShopContext';

const LatestCollection = () => {
    const{product_items} = useContext(ShopContext);
    const[latestProducts, setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(product_items.slice(0, 10));
    })

    //  console.log(product_items)
    return (
        <div>
            <p className='text-center text-3xl '>LATEST COLLECTION</p>
            <p className='text-center text-sm '>Check our best collection. We always try to provide best quality product</p>
            
        </div>
    );
};

export default LatestCollection;