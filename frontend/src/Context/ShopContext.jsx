import { createContext, useState } from "react";
import { product_items } from "../assets/products/product_List";


export const ShopContext = createContext(null);

const StoreContextProvider =(props)=>{
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    const value ={
        product_items,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,

    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default StoreContextProvider;