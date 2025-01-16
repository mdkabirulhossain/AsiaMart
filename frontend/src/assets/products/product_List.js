import t_shirt from '../products/t-shirt.jpg'
import jeans from '../products/jeans.jpg'
import sweater from '../products/Sweater.jpeg'
import jacket from '../products/Jacket.jpg'
import short from '../products/Shorts.jpg'
import Dress from '../products/Dress.jpg'
import Skirt from '../products/Skirt.jpg'
import Blouse from '../products/Blouse.jpg'
import Coat from '../products/Coat.jpg'
import Socks from '../products/Socks.jpg'
import Hat from '../products/Hat.jpg'
import Scarf from '../products/Scarf.jpg'
import Swimsuit from '../products/Swimsuit.jpg'
import Pajamas from '../products/Pajamas.jpg'
import Tank_Top from '../products/Tank Top.jpg'
import Leggings from '../products/Leggings.jpg'
import Belt from '../products/Belt.jpg'
import Overalls from '../products/Overalls.jpg'
import Cardigan from '../products/Cardigan.jpg'
import Blazer from '../products/Blazer.jpg'
import Chinos from '../products/Chinos.jpg'
import Windbreaker from '../products/Windbreaker.jpg'
import TrackSuit from '../products/Tracksuit.jpg'
import Hoodie from '../products/Hoodie.jpg'
import Culottes from '../products/Culottes.jpg'
import Kimono from '../products/Kimono.jpg'
import Turtleneck from '../products/Turtleneck.jpg'
import Cargo_Pants from '../products/Cargo Pants.jpg'
import Graphic_Tee from '../products/Graphic Tee.jpg'
import Evening_Gown from '../products/Evening Gown.jpg'
import kids_t_shirt from '../products/kids_t_shirt.jpg'
import kids_jeans from '../products/kids_jeans.jpg'
import kids_dress from '../products/kids_dress.jpg'
import kids_hoodie from '../products/kids_hoodie.jpg'
import kids_jacket from '../products/kids_jacket.jpg'
import kids_pajamas from '../products/kids_pajamas.jpg'
import kids_skirt from '../products/kids_skirt.jpg'
import kids_sweater from '../products/kids_sweater.jpg'
import kids_windbreaker from '../products/kids_windbreaker.jpg'
import kids_shorts from '../products/kids_shorts.jpg'


export const product_items = [
    { _id: "1", name: "T-Shirt", category: "Men", subcategory: "Topwear", price: 19.99, sizes:["M", "L", "XL"], image: t_shirt, images:[ t_shirt, jeans, t_shirt, jeans], bestseller: true },
    { _id: "2", name: "Jeans", category: "Men", subcategory: "Bottomwear", price: 49.99, sizes:["M", "L", "XL"], image: jeans, images:[jeans, t_shirt, t_shirt, jeans], bestseller: false },
    { _id: "3", name: "Sweater", category: "Women", subcategory: "Winterwear", price: 39.99, sizes:["M", "L", "XL"], image: sweater, images:[sweater, jeans, t_shirt, jeans], bestseller: true },
    { _id: "4", name: "Jacket", category: "Men", subcategory: "Winterwear", price: 89.99, sizes:["M", "L", "XL"], image: jacket,images:[jacket, jeans, t_shirt, jeans], bestseller: false },
    { _id: "5", name: "Shorts", category: "Women", subcategory: "Bottomwear", price: 29.99, sizes:["M", "L", "XL"], image: short,images:[short, jeans, t_shirt, jeans], bestseller: true },
    { _id: "6", name: "Dress", category: "Women", subcategory: "Topwear", price: 59.99, sizes:["M", "L", "XL"], image: Dress,images:[Dress, jeans, t_shirt, jeans], bestseller: false },
    { _id: "7", name: "Skirt", category: "Women", subcategory: "Bottomwear", price: 34.99, sizes:["M", "L", "XL"], image: Skirt,images:[Skirt, jeans, t_shirt, jeans], bestseller: false },
    { _id: "8", name: "Blouse", category: "Women", subcategory: "Topwear", price: 29.99, sizes:["M", "L", "XL"], image: Blouse,images:[Blouse, jeans, t_shirt, jeans], bestseller: false },
    { _id: "9", name: "Coat", category: "Men", subcategory: "Winterwear", price: 99.99, sizes:["M", "L", "XL"], image: Coat,images:[Coat, jeans, t_shirt, jeans], bestseller: false },
    { _id: "10", name: "Socks", category: "Men", subcategory: "Winterwear", price: 9.99, sizes:["M", "L", "XL"], image: Socks,images:[Socks, jeans, t_shirt, jeans], bestseller: false },
    { _id: "11", name: "Hat", category: "Men", subcategory: "Topwear", price: 19.99, sizes:["M", "L", "XL"], image: Hat,images:[Hat, jeans, t_shirt, jeans], bestseller: false },
    { _id: "12", name: "Scarf", category: "Women", subcategory: "Topwear", price: 14.99, sizes:["M", "L", "XL"], image: Scarf,images:[Scarf, jeans, t_shirt, jeans], bestseller: false },
    { _id: "13", name: "Swimsuit", category: "Women", subcategory: "Topwear", price: 39.99, sizes:["M", "L", "XL"], image: Swimsuit,images:[Swimsuit, jeans, t_shirt, jeans], bestseller: false },
    { _id: "14", name: "Pajamas", category: "Women", subcategory: "Bottomwear", price: 49.99, sizes:["M", "L", "XL"], image: Pajamas,images:[Pajamas, jeans, t_shirt, jeans], bestseller: false },
    { _id: "15", name: "Tank Top", category: "Men", subcategory: "Topwear", price: 24.99, sizes:["M", "L", "XL"], image: Tank_Top,images:[Tank_Top, jeans, t_shirt, jeans], bestseller: false },
    { _id: "16", name: "Leggings", category: "Women", subcategory: "Bottomwear", price: 29.99, sizes:["M", "L", "XL"], image: Leggings,images:[Leggings, jeans, t_shirt, jeans], bestseller: false },
    { _id: "17", name: "Belt", category: "Men", subcategory: "Bottomwear", price: 19.99, sizes:["M", "L", "XL"], image: Belt,images:[Belt, jeans, t_shirt, jeans], bestseller: false },
    { _id: "18", name: "Overalls", category: "Men", subcategory: "Bottomwear", price: 69.99, sizes:["M", "L", "XL"], image: Overalls,images:[Overalls, jeans, t_shirt, jeans], bestseller: false },
    { _id: "19", name: "Cardigan", category: "Women", subcategory: "Winterwear", price: 49.99, sizes:["M", "L", "XL"], image: Cardigan,images:[Cardigan, jeans, t_shirt, jeans], bestseller: false },
    { _id: "20", name: "Blazer", category: "Men", subcategory: "Topwear", price: 89.99, sizes:["M", "L", "XL"], image: Blazer,images:[Blazer, jeans, t_shirt, jeans], bestseller: false },
    { _id: "21", name: "Chinos", category: "Men", subcategory: "Bottomwear", price: 49.99, sizes:["M", "L", "XL"], image: Chinos,images:[Chinos, jeans, t_shirt, jeans], bestseller: false },
    { _id: "22", name: "Windbreaker", category: "Men", subcategory: "Winterwear", price: 59.99, sizes:["M", "L", "XL"], image: Windbreaker,images:[Windbreaker, jeans, t_shirt, jeans], bestseller: true },
    { _id: "23", name: "Tracksuit", category: "Men", subcategory: "Winterwear", price: 79.99, sizes:["M", "L", "XL"], image: TrackSuit,images:[TrackSuit, jeans, t_shirt, jeans], bestseller: false },
    { _id: "24", name: "Hoodie", category: "Men", subcategory: "Winterwear", price: 39.99, sizes:["M", "L", "XL"], image: Hoodie,images:[Hoodie, jeans, t_shirt, jeans], bestseller: false },
    { _id: "25", name: "Culottes", category: "Women", subcategory: "Bottomwear", price: 44.99, sizes:["M", "L", "XL"], image: Culottes,images:[Culottes, jeans, t_shirt, jeans], bestseller: false },
    { _id: "26", name: "Kimono", category: "Women", subcategory: "Topwear", price: 69.99, sizes:["M", "L", "XL"], image: Kimono,images:[Kimono, jeans, t_shirt, jeans], bestseller: false },
    { _id: "27", name: "Turtleneck", category: "Men", subcategory: "Topwear", price: 34.99, sizes:["M", "L", "XL"], image: Turtleneck,images:[Turtleneck, jeans, t_shirt, jeans], bestseller: false },
    { _id: "28", name: "Cargo Pants", category: "Men", subcategory: "Bottomwear", price: 54.99, sizes:["M", "L", "XL"], image: Cargo_Pants,images:[Cargo_Pants, jeans, t_shirt, jeans], bestseller: false },
    { _id: "29", name: "Graphic Tee", category: "Men", subcategory: "Topwear", price: 24.99, sizes:["M", "L", "XL"], image: Graphic_Tee,images:[Graphic_Tee, jeans, t_shirt, jeans], bestseller: false },
    { _id: "30", name: "Evening Gown", category: "Women", subcategory: "Topwear", price: 129.99, sizes:["M", "L", "XL"], image: Evening_Gown,images:[Evening_Gown, jeans, t_shirt, jeans], bestseller: false },
    { _id: "31", name: "Kids T-Shirt", category: "Kids", subcategory: "Topwear", price: 14.99, sizes:["M", "L", "XL"], image: kids_t_shirt,images:[kids_t_shirt, jeans, t_shirt, jeans], bestseller: true },
    { _id: "32", name: "Kids Jeans", category: "Kids", subcategory: "Bottomwear", price: 24.99, sizes:["M", "L", "XL"], image: kids_jeans,images:[kids_jeans, jeans, t_shirt, jeans], bestseller: false },
    { _id: "33", name: "Kids Sweater", category: "Kids", subcategory: "Winterwear", price: 29.99, sizes:["M", "L", "XL"], image: kids_sweater,images:[kids_sweater, jeans, t_shirt, jeans], bestseller: true },
    { _id: "34", name: "Kids Jacket", category: "Kids", subcategory: "Winterwear", price: 39.99, sizes:["M", "L", "XL"], image: kids_jacket,images:[kids_jacket, jeans, t_shirt, jeans], bestseller: false },
    { _id: "35", name: "Kids Shorts", category: "Kids", subcategory: "Bottomwear", price: 19.99, sizes:["M", "L", "XL"], image: kids_shorts,images:[kids_shorts, jeans, t_shirt, jeans], bestseller: true },
    { _id: "36", name: "Kids Dress", category: "Kids", subcategory: "Topwear", price: 34.99, sizes:["M", "L", "XL"], image: kids_dress,images:[kids_dress, jeans, t_shirt, jeans], bestseller: false },
    { _id: "37", name: "Kids Skirt", category: "Kids", subcategory: "Bottomwear", price: 22.99, sizes:["M", "L", "XL"], image: kids_skirt,images:[kids_skirt, jeans, t_shirt, jeans], bestseller: false },
    { _id: "38", name: "Kids Hoodie", category: "Kids", subcategory: "Winterwear", price: 29.99, sizes:["M", "L", "XL"], image: kids_hoodie,images:[kids_hoodie, jeans, t_shirt, jeans], bestseller: true },
    { _id: "39", name: "Kids Pajamas", category: "Kids", subcategory: "Topwear", price: 24.99, sizes:["M", "L", "XL"], image: kids_pajamas, images:[kids_pajamas, jeans, t_shirt, jeans], bestseller: false },
    { _id: "40", name: "Kids Windbreaker", category: "Kids", subcategory: "Winterwear", price: 34.99, sizes:["M", "L", "XL"], image: kids_windbreaker, images:[kids_windbreaker, jeans, t_shirt, jeans], bestseller: false }

];
