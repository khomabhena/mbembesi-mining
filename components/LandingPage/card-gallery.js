import Image from 'next/image'
import React from 'react'

const CardGallery = ({data}) => {
  return (
    <div className='flex flex-col border duration-200 rounded-lg items-center flex-1 cursor-pointer hover:scale-105'>
        <Image className=' h-56 w-full rounded-tl-md rounded-tr-md object-top object-cover' src={data?.imageLink} alt='' width={1000} height={1000} />
        <p className=' mt-4 px-2 text-sm text-slate-500' dangerouslySetInnerHTML={{__html: `${data?.caption}`}}></p>
    </div>
  )
}

export default CardGallery