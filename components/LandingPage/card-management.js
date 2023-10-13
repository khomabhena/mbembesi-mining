import Image from 'next/image'
import React from 'react'

const CardManagement = ({data}) => {
  return (
    <div className='flex flex-col border duration-200 rounded-lg items-center flex-1 cursor-pointer hover:scale-105 py-8 px-8'>
        <Image className=' h-28 w-28 object-top object-cover rounded-full' src={data?.imageLink} alt='' width={500} height={500} />
        <h1 className=' mt-2 text-2xl text-slate-600 font-semibold'>{data?.name}</h1>
        <h2 className=' mt-1 text-xl text-slate-500'>{data?.title}</h2>
        <p className=' mt-8 text-sm text-slate-500' dangerouslySetInnerHTML={{__html: `${data?.degree}`}}></p>
    </div>
  )
}

export default CardManagement