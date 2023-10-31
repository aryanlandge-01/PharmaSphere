

const ProductCard = (data) => {

    // console.log(data);
   
    const {imageUrl,productName,price,shortDesc} = data.data;
   
  return (
    <div className="w-36 h-auto ml-8 my-2 bg-slate-300 border-2 border-gray-400 p-4">
       <img className="w-full h-40 mb-2" src={imageUrl} alt="photo" />
       <h4 className="font-semibold text-left text-black">{productName} </h4>
       <p>₹ {price} </p>
       <p>{shortDesc}</p>
    </div>
  )
}

export default ProductCard;