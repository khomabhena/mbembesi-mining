import React from 'react'
import Card from './card'
import CardManagement from './card-management'
import CardGallery from './card-gallery'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Image from 'next/image'
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image'

const SectionSlideshowSmall = ({id, card, title, data}) => {
  return (
    <div id={id} className=' flex flex-col items-center py-24 min-h-screen'>
        <h1 className=' text-4xl font-semibold text-emerald-600'>{title}</h1>
        <div className=' flex justify-center px-8 mt-8'>
        <Zoom scale={1.4} indicators={true}>
            {data.map((each, index) => (
                <div key={index} style={{ width: "100%" }}>
                    <Image style={{ objectFit: "cover", width: "100%" }} alt="Slide Image" src={each} />
                </div>
            ))}
        </Zoom>
        </div>
    </div>
  )
}

export default SectionSlideshowSmall