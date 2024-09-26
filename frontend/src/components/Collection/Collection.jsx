import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { FaChevronRight } from "react-icons/fa";
import ProductItem from '../ProductItem/ProductItem';
import './Collection.css'


const Collection = () => {
    const{product_items} = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subcategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relevant');

    const handleCategory = (event) =>{
        if(category.includes(event.target.value)){
            setCategory(previous => previous.filter(item => item !== event.target.value))
        }
        else{
            setCategory(previous => [...previous, event.target.value])
        }
    }

    const handleSubCategory = (event) =>{
        if(subcategory.includes(event.target.value)){
            setSubCategory(previous => previous.filter(item=> item !== event.target.value))
        }else{
            setSubCategory(previous => [...previous, event.target.value])
        }
    }

    const applyFilter = ()=>{
        let productsCopy = product_items.slice();

        if(category.length > 0){
            productsCopy = productsCopy.filter(item =>category.includes(item.category))
        }

        if(subcategory.length > 0){
            productsCopy = productsCopy.filter(item => subcategory.includes(item.subcategory))
        }
        setFilterProducts(productsCopy);
    }
    
    const handleSort =() =>{
        let filter_Products = filterProducts.slice();
        switch(sortType){
            case "low-high":
                setFilterProducts(filter_Products.sort((a,b)=>(a.price - b.price)));
                break;

            case "high-low":
                setFilterProducts(filter_Products.sort((a,b)=>(b.price - a.price)));
                break;

            default:
                applyFilter();
                break;

        }
    }


    useEffect(()=>{
        setFilterProducts(product_items);
    },[])

    useEffect(()=>{
        applyFilter();
    },[category, subcategory])

    useEffect(()=>{
        handleSort();
    },[sortType])

    // useEffect(()=>{
    //     console.log(subcategory);
    // },[subcategory])


    return (
        <div className='flex flex-col md:flex-row gap-4 mb-10'>
            <div className='ml-4 '>
                <p onClick={()=>setShowFilter(!showFilter)} className='mt-10 flex items-center gap-2 cursor-pointer text-xl text-black w-60'>FILTER
                    <FaChevronRight className={`h-4 sm:hidden ${showFilter? 'rotate-90': ""}`}></FaChevronRight>
                </p>
                <div className={`border border-orange-300 pl-5 py-3 my-3 w-60 ${showFilter? "": "hidden"} sm:block` }>
                    <p className="mb-3 text-sm font-medium">CATEGORIES</p>
                    <div className="flex flex-col gap-2 text-sm text-black">
                        <p className="flex gap-2">
                            <input type="checkbox" className='w-3' value={"Men"} name="" id="" onChange={handleCategory} /> Men
                        </p>
                        <p className="flex gap-2">
                            <input type="checkbox" className='w-3' value={"Women"} name="" id="" onChange={handleCategory} /> Women
                        </p>
                        <p className="flex gap-2">
                            <input type="checkbox" className='w-3' value={"Kids"} name="" id="" onChange={handleCategory} /> Kids
                        </p>
                    </div>
                </div>
                <div className={`border border-orange-300 pl-5 py-3 my-5 w-60 ${showFilter? "": "hidden"} sm:block` }>
                    <p className="mb-3 text-sm font-medium">TYPES</p>
                    <div className="flex flex-col gap-2 text-sm text-black">
                        <p className="flex gap-2">
                            <input type="checkbox" className='w-3' value={"Topwear"} name="" id="" onChange={handleSubCategory} /> Topwear
                        </p>
                        <p className="flex gap-2">
                            <input type="checkbox" className='w-3' value={"Bottomwear"} name="" id="" onChange={handleSubCategory} /> Bottomwear
                        </p>
                        <p className="flex gap-2">
                            <input type="checkbox" className='w-3' value={"Winterwear"} name="" id="" onChange={handleSubCategory} /> Winterwear
                        </p>
                    </div>
                </div>
            </div>
            {/* Right side  */}
            <div className="flex-1 mt-10">
                <div className='flex justify-between mb-3'>
                    <p className='text-black text-2xl'>ALL COLLECTIONS</p>
                    <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-orange-300 text-sm px-2' name="" id="">
                        <option value="relevant">Sort: Relevant</option>
                        <option value="low-high"> Low to HIgh</option>
                        <option value="high-low"> High to Low</option>
                    </select>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-6">
                    {
                        filterProducts.map(item =><ProductItem
                        key={item._id} id={item._id} name={item.name} image={item.image} price={item.price}
                        ></ProductItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Collection;