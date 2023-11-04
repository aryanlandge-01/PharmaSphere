import Sliders from "./Sliders";
import axios from 'axios';
import { useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../utils/ItemSlice';
import HomepageSlider from "./HomepageSlider";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import Accordion from "./Accrodion";



const Home = () => {

  const [product,SetProducts]  = useState([]);
  const [filterproduct,SetfilterProducts] = useState([]);
  const [flag,Setflag]   = useState(false);

  const [searchtext, setsearchtext] = useState("");

  const dispatch = useDispatch();

  const item = useSelector((store) => store.Items);

  // console.log(item);

  const fetchData = () => {
    return axios.get(`http://localhost:3000/data`);
  };


  useEffect(() => {
     
    fetchData()
      .then((res) => {  
       dispatch(addProducts(res.data));

       SetProducts(res.data);
       SetfilterProducts(res.data);
  
        // console.log(res.data);
      })
      .catch((err) => console.log(err));

  }, []);

  console.log(product);


  return (
    <div>
        <div className="mt-12 ml-10 p-10 flex justify-between items-center">
          <div className="w-80 flex flex-col gap-5">
            <h1 className="font-bold  text-4xl">Health is the most important thing</h1>
            <p className="font-light text-white ">
              A fit Body,a calm mind,a house full of love.
              These things can not be bought.They must be earned. 
              Health will change life to be a happy.
            </p>
            <div className="flex">
              <input 
                className="w-full p-2 rounded-l-lg" 
                type="text" 
                placeholder="Find your medicines here"
                value={searchtext} 
                onChange={(e) => 
                    {  setsearchtext(e.target.value); }
                }
              />
              <button
                   className="bg-blue-600 text-click rounded-r-lg px-4"
                   onClick={() => {
                    const searchProduct = product.filter((product) => (
                        product.productName.toLowerCase().includes(searchtext.toLowerCase())
                    ));
                    console.log(searchtext);
                    SetfilterProducts(searchProduct);
                    Setflag(true);
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
          <div className="h-72  mr-10">
            <img 
              className="w-full h-full object-cover shadow-md rounded-xl"
              src="https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lZGljaW5lfGVufDB8fDB8fHww" alt="" />
          </div>

        </div>
        {flag && 
         <div className="flex overflow-x-scroll mx-24">
         { 
         filterproduct.map((item) => (
                 <Link key={item._id} to={"/product/" + item._id} >
                     <ProductCard data={item}/>
                 </Link>
                ) )
         }
         </div>
        }



        <div className="mt-10"> 
          <h1 className="mx-36 p-2 text-lg text-white font-semibold">Most Searched Products</h1>
            <HomepageSlider type={"TopSellers"} />
          <h1 className="mx-36 p-2 text-lg text-white font-semibold">Deal of the day</h1> 
            <HomepageSlider type={"dealoftheday"} />
          <h1 className="mx-36 p-2 text-lg text-white font-semibold">Trending Now</h1>
            <HomepageSlider type={"Trendingnow"} />
          <h1 className="mx-36 p-2 text-lg text-white font-semibold">Shop by health concerns</h1>
            <Sliders />  
        </div>
         
       <div>
    
       <div className="my-20">
        <Accordion/>
       </div>



       </div>
   
       
     
    </div>
  )
}

export default Home