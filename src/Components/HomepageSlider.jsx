import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FreeMode, Pagination ,Navigation } from 'swiper/modules';

const HomepageSlider = (props) =>  {

        

        const item = useSelector((store) => store.Items.Products);
    
        if (!item || item.length === 0) {
        
          return;
        }
      
        const filteredProducts = item.filter(product => {
            return product.slider === props.type;
        });

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
            <SwiperSlide key={p._id} className='p-8 bg-teal-500'>
               <img src={p.imageUrl} className='w-36 h-44' alt="health" />
               <h2  className='text-white font-semibold text-sm p-1 truncate'>{p.productName}</h2>
               <p>₹{p.price}</p>
            </SwiperSlide>      
        )
         )
    }
    
    </Swiper>
      )
    }


export default HomepageSlider