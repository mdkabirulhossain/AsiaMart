import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({id, image, name, price}) => {

    const{currency,delivery_fee,} = useContext(ShopContext);

    return (
    <Link to={`/product/${id}`}>
        
    
    </Link>
    );
};

export default ProductItem;