import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";

const Productpage = () => {
  
    const {proId} = useParams();
    
    const dispatch = useDispatch();

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
    

    const {imageUrl,productName,price,shortDesc,prodHighlights,longDesc,ratings,brand,discount} = productWithDesiredId;
    
    const handleaddItem = (productWithDesiredId) => {
            dispatch(addItem(productWithDesiredId));
            alert("Item added to cart");
    }

    

  return (
    <div className="mx-auto my-10 max-w-4xl">
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="grid grid-cols-2 p-8">
        <div className="h-80 relative overflow-hidden flex items-center justify-center">
          <img className="object-cover w-auto h-full" src={imageUrl} alt="product_img" />
        </div>
        <div className="p-6">
          <h2 className="text-3xl font-semibold mb-4">{productName}</h2>
          <p className="text-lg mb-4">{shortDesc}</p>
          <p className="text-sm mb-4 truncate">{prodHighlights}</p>
          <p className="text-sm mb-4 truncate">{longDesc}</p>
          <div className="flex items-center mb-4">
            <h4 className="text-lg mr-2">${price}</h4>
            <span className="text-sm">Ratings - {ratings} stars</span>
          </div>
          <p className="text-sm mb-4">Brand: {brand}</p>
          <p className="text-sm mb-4">Discount: {discount}% off</p>
          <button
            onClick={() => handleaddItem(productWithDesiredId)}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </button>

          <div>
            <p className="text-sm my-3 text-end text-gray-800">**prescription mandatory</p>
          </div>
        
        </div>
      </div>
    </div>
  </div>

  )
}

export default Productpage;