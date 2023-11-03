import { useDispatch,useSelector } from "react-redux";
import {removeItem} from "../utils/CartSlice";

const Cart = () => {
   
  const cartItems = useSelector((store) => store.Cart.Itemsadded )

  const dispatch = useDispatch();

  const handleRemove = () => {
       dispatch(removeItem());
       alert("Item is suceesfully removed from the cart.")
  }

  return (
    <div className="bg-green-400 mx-auto w-3/4 my-5">
       <h1 className="text-center text-3xl">Cart</h1>
       <div>
              {
                  cartItems.length === 0 &&
                  <h1 className="font-bold m-6 text-5xl text-center">Your cart is Empty<br></br>
                   Add Item to the cart😔</h1>
              }
       </div>
       <div>
       {cartItems.map((product) => (
           <div key={product._id} className="flex flex-col gap-4">
                <img src={product.imageUrl} alt="Product_image" className="w-36 h-44" />
                <p>{product.price}</p>
                <button onClick={handleRemove} className="border border-red-500 p-2 rounded-lg text-white bg-red-900 my-2">Remove</button>
           </div>
        ))}
       </div>
    </div>
  )
}

export default Cart;

