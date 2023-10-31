import Sliders from "./Sliders";
import ProductSliders from "./ProductSliders";
import axios from 'axios';
import { useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../utils/ItemSlice';
import Dealoftheday from "./Dealoftheday";
import TrendingNow from "./TrendingNow";



const Home = () => {

  const dispatch = useDispatch();

  const item = useSelector((store) => store.Items);

  console.log(item);

  const fetchData = () => {
    return axios.get(`http://localhost:3000/data`);
  };


  useEffect(() => {
     
    fetchData()
      .then((res) => {  
       dispatch(addProducts(res.data));
  
        // console.log(res.data);
      })
      .catch((err) => console.log(err));

  }, []);


  return (
    <div>
        <div className="mt-12 ml-10 p-10 flex justify-between items-center">
          <div className="w-80 flex  flex-col gap-5">
            <h1 className="font-bold  text-4xl">Health is the most important thing</h1>
            <p className="font-light text-white">
              A fit Body,a calm mind,a house full of love.
              These things can not be bought.They must be earned. 
              Health will change life to be a happy.
            </p>
            <div className="flex">
              <input className="w-full p-2 rounded-l-lg" type="text" placeholder="Find your medicines here"/>
              <img className="h-10 rounded-r-lg" src="https://png.pngtree.com/element_our/20190529/ourmid/pngtree-cartoon-blue-magnifying-glass-illustration-image_1214215.jpg" alt="search-icon" />
            </div>
          </div>
          <div className="">
            <img className="h-72 w-full rounded-lg " src="https://media.istockphoto.com/id/1300036753/photo/falling-antibiotics-healthcare-background.jpg?s=612x612&w=0&k=20&c=oquxJiLqE33ePw2qML9UtKJgyYUqjkLFwxT84Pr-WPk=" alt="heros_img" />
          </div>
        </div>
        <div className=""> 
          <h1 className="mx-36 p-2 text-lg text-white font-semibold">Most Searched Products</h1>
          <ProductSliders/>
          <h1 className="mx-36 p-2 text-lg text-white font-semibold">Deal of the day</h1>
          <Dealoftheday/>
          <h1 className="mx-36 p-2 text-lg text-white font-semibold">Trending Now</h1>
          <TrendingNow/>
          <h1 className="mx-36 p-2 text-lg text-white font-semibold">Shop by health concerns</h1>
          <Sliders />  
        </div>
         
       
   
       
     
    </div>
  )
}

export default Home