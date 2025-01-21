import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import Title from '../Title/Title';

const Cart = () => {
    const { product_items, currency, cartItem } = useContext(ShopContext);
    const [cartData, setCartData] = useState([])

    useEffect(() => {
        const tempData = [];
        for (const items in cartItem) {
            for (const item in cartItem[items]) {
                if (cartItem[items][item] > 0) {
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity: cartItem[items][item],
                    })
                }
            }
        }
        // console.log(tempData);
        setCartData(tempData);
    }, [cartItem])
    return (
        <div className='border-t pt-12'>

            <div className='text-2xl mb-3'>
                <Title text1={"CART"} text2={"ITEMS"}></Title>

            </div>
            <div>
                {
                    cartData.map(item => {
                        const productData = product_items.find(product => product._id === item._id);

                        return (
                            <div key={item._id} >

                                <div className='flex gap-5'>
                                    <div>
                                        <img className='w-16 sm:20' src={productData.image} alt="" />
                                    </div>
                                    <div>
                                        <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                                        <div className='flex items-center gap-5 mt-2'>
                                        <p className=''>{currency}{productData.price}</p>
                                        <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className='my-2'/>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    );
};

export default Cart;