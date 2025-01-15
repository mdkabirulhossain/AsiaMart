import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';
import './ProductItem.css'

const ProductItem = ({id, image, name, price}) => {

    const{currency,delivery_fee,} = useContext(ShopContext);

    return (
    <Link className='shadow-2xl ' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img src={image} alt="" className='w-full h-[200px] item_image' />
        </div>
        <p className='text-xl pt-3 pl-3'>{name}</p>
        <p className='text-sm font-bold pt-3 pl-3 pb-2'>{currency}{price}</p>
    
    </Link>
    );
};

export default ProductItem;