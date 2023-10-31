import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FreeMode, Pagination ,Navigation } from 'swiper/modules';

const Dealoftheday = () => {


    const item = useSelector((store) => store.Items.Products);

    if (!item || item.length === 0) {
    // Handle the case where item is null or empty
      return;
    }
  
    const filteredProducts = item.filter(product => product.slider === "dealoftheday");
  
    // console.log(filteredProducts);



  return (
    <Swiper
    slidesPerView={4}
    spaceBetween={10}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[FreeMode, Pagination,Navigation]}
    navigation= {{
      clickable: true,
    }}
   className='w-3/4 h-full mb-4 p-2 bg-sky-400  mx-auto rounded-lg'
> 
{
    filteredProducts.map((p) => (
        <SwiperSlide  key={p._id} className='p-8'>
           <img src={p.imageUrl} className='w-36 h-44' alt="health" />
           <h2  className='text-white font-semibold text-lg p-1'>{p.productName}</h2>
        </SwiperSlide>

    )
     )
}


</Swiper>
  ) 
}

export default Dealoftheday