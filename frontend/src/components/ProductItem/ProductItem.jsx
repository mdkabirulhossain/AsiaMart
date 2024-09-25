import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';
import './ProductItem.css'

const ProductItem = ({id, image, name, price}) => {

    const{currency,delivery_fee,} = useContext(ShopContext);

    return (
    <Link className='shadow-2xl ' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img src={image} alt="" className='w-[300px] h-[200px] item_image' />
        </div>
        <p className='text-sm pt-3'>{name}</p>
        <p className='text-sm pt-3'>{currency}{price}</p>
    
    </Link>
    );
};

export default ProductItem;