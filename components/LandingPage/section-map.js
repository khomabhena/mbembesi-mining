import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SectionMap = ({data}) => {
  return (
    <div id={data?.id} className={` flex flex-col py-24 md:flex-row ${data?.reverse ? 'md:flex-row-reverse' : ''} ${data?.light ? 'bg-slate-100': ''} items-center min-h-screen gap-12 px-8 md:px-24`}>
        
        <div className=' flex-1'>
            <h3 className=' text-lg md:text-xl text-emerald-400 font-semibold'>{data?.heading}</h3>
            <h1 className=' text-3xl md:text-4xl font-semibold text-slate-600'>{data?.title}</h1>
            <p className=' mt-4 text-md md:text-md text-slate-500' dangerouslySetInnerHTML={{__html: `${data?.subTitle}`}} ></p>
            <Link className={`${data?.buttonName === '' ? 'hidden' : ' block'}`} href={data?.buttonLink}>
              <button className=' mt-8 bg-sky-900 px-8 py-2 rounded-md text-slate-100 font-semibold cursor-pointer'>{data?.buttonName}</button>
            </Link>
        </div>

        <div className=' flex-1 px-8'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72603.2604384926!2d28.445743751898657!3d-20.48184624309849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eb567cd11297c37%3A0x8fb2913756fef6f9!2sMatobo%20Hills!5e0!3m2!1sen!2szw!4v1697120428600!5m2!1sen!2szw" width="600" height="450" className=' border-0' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

    </div>
  )
}

export default SectionMap