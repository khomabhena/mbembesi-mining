import React from 'react'
import Card from './card'
import CardManagement from './card-management'
import CardGallery from './card-gallery'
import { Zoom } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Image from 'next/image'

const SectionSlideshow= ({id, card, title, data}) => {
  return (
    <div id={id} className=' flex flex-col items-center py-24 min-h-screen'>
        <h1 className=' text-4xl font-semibold text-emerald-600'>{title}</h1>
        <div className=' flex justify-center px-8 mt-8'>
          <Carousel className=' md:w-5/6 h-96 rounded-md shadow-sm shadow-emerald-600'>
            {
              data?.map((item, index) => (
                <>
                <Image className=' h-96 object-cover rounded-md' key={index} src={item?.imageLink} alt='' width={1000} height={800} />
                </>
              ))
            }
          </Carousel>
        </div>
    </div>
  )
}

export default SectionSlideshow