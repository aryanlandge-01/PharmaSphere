import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


const Productpage = () => {
  
    const {proId} = useParams();

    const item = useSelector((store) => store.Items.Products);

    function getObjectById(productsArray, id) {
        return productsArray.find(product => product._id === id);
    }
     
    const productWithDesiredId = getObjectById(item, proId);
    
    // if (productWithDesiredId) {
    //     console.log('Found product:', productWithDesiredId);
    // } else {
    //     console.log('Product with the given ID not found.');
    // }
    

    const {imageUrl,productName,price,shortDesc,prodHighlights,longDesc,ratings} = productWithDesiredId;


  return (
    <div className="mx-auto my-20 w-3/4 rounded-lg h-screen shadow-xl bg-white">
         <div className="grid grid-cols-2 p-7">
                   <div className="bg-green-700 h-56 ">
                    <img className="w-60 h-full py-4" src={imageUrl} alt="product_img" />
                    <p className="text-2xl font-semibold py-5">{productName}</p>
                    <h2 className="text-lg font-serif">{shortDesc}</h2>
                    <h5 className="truncate">{prodHighlights}</h5>
                    <p className="truncate"> {longDesc} </p>
                    <h4>${price} Ratings-{ratings}stars </h4>
                    
                    <button className="w-full  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Add to Cart 
                    </button>

                   </div>
                   <div className="bg-pink-300">Revnew and add to cart features and more review.</div>
         </div>
       
    
    
    </div>
  )
}

export default Productpage;