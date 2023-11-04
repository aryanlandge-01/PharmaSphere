import { useDispatch,useSelector } from "react-redux";
import {removeItem} from "../utils/CartSlice";

const Cart = () => {
   
  const cartItems = useSelector((store) => store.Cart.Itemsadded )

  const dispatch = useDispatch();

  const handleRemove = () => {
       dispatch(removeItem());
       alert("Item is suceesfully removed from the cart.")
  }

  const getTotalAmount = () => {
     return cartItems.reduce((total, product) => total + product.price, 0);
   };

  return (
//     <div className=" mx-auto w-3/4 my-5">
//        <h1 className="text-center text-3xl">Cart</h1>
//        <div>
//               {
//                   cartItems.length === 0 &&
//                   <h1 className="font-bold m-6 text-5xl text-center">Your cart is Empty<br></br>
//                    Add Item to the cart😔</h1>
//               }
//        </div>
//        <div>
//        {cartItems.map((product) => (
//            <div key={product._id} className="flex flex-col gap-4">
//                 <img src={product.imageUrl} alt="Product_image" className="w-36 h-44" />
//                 <p>{product.price}</p>
//                 <button onClick={handleRemove} className="border border-red-500 p-2 rounded-lg text-white bg-red-900 my-2">Remove</button>
//            </div>
//         ))}
//        </div>
//     </div>
<div className="mx-auto w-3/4 my-5 bg-white p-6 rounded-lg shadow-xl">
<h1 className="text-4xl font-bold font-serif text-center mb-5">Cart</h1>
<div>
  {cartItems.length === 0 && (
    <h1 className="font-bold m-6 text-5xl text-center">
      Your cart is Empty<br />
      Add Items to the cart
    </h1>
  )}
</div>
<div className="grid grid-cols-3 gap-4">
  {cartItems.map((product) => (
    <div key={product._id} className="border border-gray-300 rounded-lg p-4 flex flex-col items-center">
      <img src={product.imageUrl} alt="Product_image" className="w-36 h-44" />
      <div className="flex flex-col items-center">
        <p className="font-semibold text-lg">{product.productName}</p>
        <p>${product.price}</p>
        <button onClick={() => handleRemove(product._id)} className="border border-red-500 p-2 rounded-lg text-white bg-red-700 my-2">
          Remove
        </button>
      </div>
    </div>
  ))}
</div>
{cartItems.length > 0 && (
  <div className="mt-5 flex justify-between items-center">
    <p className="text-xl font-semibold">Total: ${getTotalAmount()}</p>
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleCheckout(cartItems)}>
      Proceed to Checkout
    </button>
  </div>
)}
</div>
  )
}

export default Cart;

