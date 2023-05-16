import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Section = ({data}) => {
  return (
    <div className={` flex flex-col py-24 md:flex-row ${data?.reverse ? 'md:flex-row-reverse' : ''} ${data?.light ? 'bg-slate-100': ''} items-center min-h-screen gap-12 px-8 md:px-24`}>
        
        <div className=' flex-1'>
            <h3 className=' text-lg md:text-xl text-slate-400 font-semibold'>{data?.heading}</h3>
            <h1 className=' text-3xl md:text-5xl font-semibold text-slate-600'>{data?.title}</h1>
            <p className=' mt-4 text-lg md:text-xl text-slate-500'>{data?.subTitle}</p>
            <Link href={data?.buttonLink}>
              <button className=' mt-8 bg-sky-900 px-8 py-2 rounded-md text-slate-100 font-semibold cursor-pointer'>{data?.buttonName}</button>
            </Link>
        </div>

        <div className=' flex-1'>
            <Image className=' w-full h-auto px-12 mt-8' src={data?.imageLink} alt='' width={200} height={150} />
        </div>

    </div>
  )
}

export default Section