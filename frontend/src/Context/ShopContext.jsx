import { createContext, useEffect, useState } from "react";
import { product_items } from "../assets/products/product_List";
import { toast } from "react-toastify";


export const ShopContext = createContext(null);

const StoreContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItem, setCartItem] = useState({});

    const addToCart = async (Itemid, size) => {
        let cartData = structuredClone(cartItem);
        if(!size){
            toast.error("Select product size");
            return;
        }
        if (cartData[Itemid]) {
            if (cartData[Itemid], [size]) {
                cartData[Itemid][size] += 1;
            } else {
                cartData[Itemid][size] = 1;
            }
        } else {
            cartData[Itemid] = {};
            cartData[Itemid][size] = 1;
        }

        setCartItem(cartData);
    }

    useEffect(()=>{
        console.log(cartItem);
    }, [cartItem])
    
    const value = {
        product_items,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        addToCart,

    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default StoreContextProvider;