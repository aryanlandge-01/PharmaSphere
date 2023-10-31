import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
// import ProductCard from "./ProductCard";

const MedicineContainer = () => {
     
     
     const info = useSelector((store) => store.Items.Products);


     if (info === null) return;

    
    //  console.log(info);

    //  const {imageUrl,price,shortDesc,productName }  = info;

    

     
  return (
    <div className=' bg-white h-screen rounded-r-xl opacity-90 flex flex-wrap overflow-y-scroll'>
          
               {info.map((product) => (
                 <Link key={product._id} to={"/product/" + product._id} >
                     <ProductCard data={product}/>
                 </Link>
                ) )}
           
    </div>
  )
}

export default MedicineContainer;