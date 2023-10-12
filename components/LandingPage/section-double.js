import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SectionDouble = ({data}) => {
  return (
    <div id={data?.id} className={` flex flex-col py-24 md:flex-row ${data?.reverse ? 'md:flex-row-reverse' : ''} ${data?.light ? 'bg-slate-50': ''} items-center gap-12 px-8 md:px-24`}>
        
        <div className=' flex-1'>
            <h3 className=' text-lg md:text-xl text-emerald-400 font-semibold'>{data?.heading}</h3>
            <h1 className=' text-3xl md:text-4xl font-semibold text-slate-600'>{data?.title}</h1>
            <p className=' mt-4 text-md md:text-md text-slate-500'>{data?.subTitle}</p>
        </div>

        <div className=' flex-1'>
            <h3 className=' text-lg md:text-xl text-emerald-400 font-semibold'></h3>
            <h1 className=' text-3xl md:text-4xl font-semibold text-slate-600'>{data?.titleTwo}</h1>
            <p className=' mt-4 text-md md:text-md text-slate-500'>{data?.subTitleTwo}</p>
        </div>

        

    </div>
  )
}

export default SectionDouble