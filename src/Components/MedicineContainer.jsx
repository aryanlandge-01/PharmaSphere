import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
// import ProductCard from "./ProductCard";

const MedicineContainer = () => {
     
    const [infoproduct, setInfoproduct] = useState([]);
    const [searchtext, setsearchtext] = useState("");
     

     const info = useSelector((store) => store.Items.Products);
    

     useEffect(() => {
      setInfoproduct(info);
     },[info])


    console.log(searchtext);

     if (info === null) return;

    
    //  console.log(info)
    //  const {imageUrl,price,shortDesc,productName }  = info;

     
  return (
    <div className=' bg-white h-screen rounded-r-xl opacity-90 overflow-y-scroll '>
          <div className="m-4 ">
            <div className="inline-flex w-full">
              <input 
                className="text-black font-semibold w-3/4 rounded-l-xl p-2 border-4" 
                type="text" 
                placeholder="Search products here" 
                value={searchtext} 
                onChange={(e) => 
                    {  setsearchtext(e.target.value); }
                }
              />
              <button className="p-2 rounded-r-xl bg-slate-100 border-4"
                 onClick={() => {
                      const searchProduct = info.filter((product) => (
                          product.productName.toLowerCase().includes(searchtext.toLowerCase())
                      ));

                      setInfoproduct(searchProduct);
                 }}
              
              
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 14L17 17" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M21.9994 19.5552L17.945 15.5L15.5 17.945L19.5544 22.0002L21.9994 19.5552Z" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C12.866 16 16 12.866 16 9Z" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/>
                </svg>
             </button>
             </div>
          </div>
             <div className="flex flex-wrap"> 
              {infoproduct.map((product) => (
                 <Link key={product._id} to={"/product/" + product._id} >
                     <ProductCard data={product}/>
                 </Link>
                ) )}
           </div> 
    </div>
  )
}

export default MedicineContainer;