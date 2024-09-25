import React, { useContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { FaChevronRight } from "react-icons/fa";

const Collection = () => {
    const{product_items} = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);

    return (
        <div className='flex gap-4'>
            <div className='ml-4'>
                <p onClick={()=>setShowFilter(!showFilter)} className='mt-10 flex items-center gap-2 cursor-pointer text-xl text-black w-60'>FILTER
                    <FaChevronRight className={`h-4 sm:hidden ${showFilter? 'rotate-90': ""}`}></FaChevronRight>
                </p>
                <div className={`border border-gray-300 pl-5 py-3 my-3 w-60 ${showFilter? "": "hidden"} sm:block` }>
                    <p className="mb-3 text-sm font-medium">CATEGORIES</p>
                    <div className="flex flex-col gap-2 text-sm text-black">
                        <p className="flex gap-2">
                            <input type="checkbox" className='w-3' value={"Men"} name="" id="" /> Men
                        </p>
                        <p className="flex gap-2">
                            <input type="checkbox" className='w-3' value={"Women"} name="" id="" /> Women
                        </p>
                        <p className="flex gap-2">
                            <input type="checkbox" className='w-3' value={"Kids"} name="" id="" /> Kids
                        </p>
                    </div>
                </div>
                <div className={`border border-gray-300 pl-5 py-3 my-5 w-60 ${showFilter? "": "hidden"} sm:block` }>
                    <p className="mb-3 text-sm font-medium">TYPES</p>
                    <div className="flex flex-col gap-2 text-sm text-black">
                        <p className="flex gap-2">
                            <input type="checkbox" className='w-3' value={"Topwear"} name="" id="" /> Topwear
                        </p>
                        <p className="flex gap-2">
                            <input type="checkbox" className='w-3' value={"Bottomwear"} name="" id="" /> Bottomwear
                        </p>
                        <p className="flex gap-2">
                            <input type="checkbox" className='w-3' value={"Winterwear"} name="" id="" /> Winterwear
                        </p>
                    </div>
                </div>
            </div>
            {/* Right side  */}
            <div className="flex-1 mt-10">
                <div className='flex justify-between mb-4'>
                    <p className='text-black text-2xl'>ALL COLLECTIONS</p>
                    <select className='border-2 border-gray-300 text-sm px-2' name="" id="">
                        <option value="relevant">Sort by: Relevant</option>
                        <option value="low-high">Sort by: Low to HIgh</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Collection;