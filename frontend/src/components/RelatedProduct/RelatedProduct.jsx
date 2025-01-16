import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import Title from '../Title/Title';
import ProductItem from '../ProductItem/ProductItem';

const RelatedProduct = ({category, subCategory}) => {
    const{product_items} = useContext(ShopContext);
    const[related, setRelated] = useState([]);

    useEffect(()=>{
        if(product_items.length > 0){
            let productCopy = product_items.slice();

            productCopy = productCopy.filter(item => category === item.category);
            productCopy = productCopy.filter(item => subCategory === item.subCategory);
            // console.log(productCopy.slice(0,5))
           setRelated(productCopy.slice(0,5))
        }
    }, [product_items])
    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={"RELETED"} text2={"PRODUCTS"}></Title>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-6">
                    {
                        related.map(item =><ProductItem
                        key={item._id} id={item._id} name={item.name} image={item.image} price={item.price}
                        ></ProductItem>)
                    }
                </div>
        </div>
    );
};

export default RelatedProduct;