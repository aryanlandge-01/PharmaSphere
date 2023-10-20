import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { FreeMode, Pagination ,Navigation } from 'swiper/modules';

const Sliders = () => {
  return (
    // <div className='h-56 mx-auto mb-10 bg-sky-300 cursor-pointer '>    
      //  <h1 className='font-bold ml-36 p-4 text-xl'>Shop by health concerns.</h1>
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
        <SwiperSlide className='p-8 '>
            <img  src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/hgzkyio2rphkn6wjif94.png" alt="health" />
             <h2 className='text-white font-semibold text-lg p-1'>Diabetes Care</h2>
        </SwiperSlide>
        <SwiperSlide className='p-8'>
            <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/zo7sc14nqpt6ebeojkvr.png" alt="health" />
             <h2  className='text-white font-semibold text-lg p-1'>Cardiac Care</h2>
        </SwiperSlide>
        <SwiperSlide className='p-8'>
            <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ttagxlnxulsvkyv9fetr.png" alt="health" />
            <h2 className='text-white font-semibold text-lg p-1'>Stomach Care</h2>
        </SwiperSlide>
        <SwiperSlide className='p-8'>
            <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ijgn7fhyq8ig0welmrcp.png" alt="health" />
            <h2 className='text-white font-semibold text-lg p-1'>Liver Care</h2>
        </SwiperSlide>
        <SwiperSlide className='p-8'>
            <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/zytsldnf5mvb0u19ydep.png" alt="health" />
            <h2 className='text-white font-semibold text-lg p-1'>Kidney Care</h2>
        </SwiperSlide>
        <SwiperSlide className='p-8'>
            <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/hn5bpr1ci2do5kdub51v.png" alt="health" />
             <h2 className='text-white font-semibold text-lg p-1'>Pain Care</h2>
        </SwiperSlide>
        <SwiperSlide className='p-8'>
            <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/hr9vysj9cy0sfjs3mpg0.png" alt="health" />
              <h2 className='text-white font-semibold text-lg p-1'>Respiratory relief</h2>
        </SwiperSlide>
        <SwiperSlide className='p-8'>
            <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/t0ehbhfrkughfxoygvs2.png" alt="health" />
            <h2 className='text-white font-semibold text-lg p-1'>Eye Care</h2>
        </SwiperSlide>
      </Swiper>
    
    // </div>
    
  );
}

export default Sliders;