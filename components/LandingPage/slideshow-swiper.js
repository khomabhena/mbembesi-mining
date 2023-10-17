import getDataGallery from '@/data/data-gallery';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, EffectCube, Navigation, Pagination } from 'swiper/modules';


const SwiperJS = () => {
    const images = getDataGallery()

    return (
        <>
        <Swiper
          effect={'cube'}
          loop={true}
          navigation={true}
          pagination={true}
          grabCursor={true}
          autoplay={{delay:3000, disableOnInteraction: false}}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          modules={[EffectCube, Autoplay, Pagination, Navigation]}
          className=" absolute w-full h-96 ml-8 mt-8"
        >
            {
                images.map((image, index) => (
                    <SwiperSlide key={index} className=''>
                        <Image className='object-cover object-center block w-full h-full' src={image.imageLink} alt={image.caption} width={500} height={500} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
      </>
    );
};

export default SwiperJS;