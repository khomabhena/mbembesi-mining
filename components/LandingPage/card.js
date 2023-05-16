import Image from 'next/image'
import React from 'react'

const Card = ({data}) => {
  return (
    <div className='flex flex-col items-center flex-1 rounded-lg shadow-2xl shadow-sky-200 cursor-pointer hover:scale-105 bg-slate-100 py-8 px-8'>
        <Image className=' h-28 w-auto' src={data?.imageLink} alt='' width={100} height={80} />
        <h1 className=' mt-8 text-2xl text-slate-600 font-semibold'>{data?.title}</h1>
        <p className=' mt-4 text-slate-500'>{data?.subTitle}</p>
    </div>
  )
}

export default Card