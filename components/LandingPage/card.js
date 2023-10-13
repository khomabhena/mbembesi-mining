import Image from 'next/image'
import React from 'react'

const Card = ({data}) => {
  return (
    <div className='flex flex-col duration-200 rounded-tr-3xl items-center flex-1 shadow-md shadow-emerald-200 cursor-pointer hover:scale-105 bg-slate-100 py-8 px-8'>
        <Image className=' h-28 self-start w-auto rounded-tr-full' src={data?.imageLink} alt='' width={800} height={600} />
        <h1 className=' mt-8 self-start text-2xl text-slate-600 font-semibold'>{data?.title}</h1>
        <p className=' mt-4 text-sm text-slate-500' dangerouslySetInnerHTML={{__html: `${data?.subTitle}`}}></p>
    </div>
  )
}

export default Card