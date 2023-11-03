
import { Link } from 'react-router-dom';

const ProductCard = ({ data }) => {
    // eslint-disable-next-line react/prop-types
    const { imageUrl, productName, price, shortDesc } = data;

    return (
        // eslint-disable-next-line react/prop-types
        <Link to={`/product/${data._id}`} className="block w-36 h-80 ml-8 my-2 bg-slate-300 border-2 border-gray-400 rounded-lg overflow-hidden">
            <div className="h-40 relative">
                <img className="w-full h-full object-cover" src={imageUrl} alt="photo" />
            </div>
            <div className="p-4 h-40 flex flex-col justify-between">
                {/* <h4 className="font-semibold text-left text-black text-sm">{productName}</h4> */}
                <h4 className="font-semibold text-left text-black text-base overflow-hidden whitespace-nowrap">{productName}</h4>
                <p>₹ {price}</p>
                <p className="flex-1 text-sm ">{shortDesc}</p>
                <p className='text-sm font-thin'>Deliverd by tommorow</p>
            </div>
        </Link>
    );
}

export default ProductCard;



// const ProductCard = (data) => {

//     // console.log(data);
   
//     const {imageUrl,productName,price,shortDesc} = data.data;
   
//   return (
//     <div className="w-36 h-auto ml-8 my-2 bg-slate-300 border-2 border-gray-400 p-4">
//        <img className="w-full h-40 mb-2" src={imageUrl} alt="photo" />
//        <h4 className="font-semibold text-left text-black">{productName} </h4>
//        <p>₹ {price} </p>
//        <p>{shortDesc}</p>
//     </div>
//   )
// }

// export default ProductCard;


