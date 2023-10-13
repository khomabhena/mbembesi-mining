import getHeroSectionData from '@/data/hero-section'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const HeroSection = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        setData(getHeroSectionData())
    }, [])

  return (
    <div className=' relative bg-slate-50 pt-24 grid grid-cols-1 md:grid-cols-2 min-h-screen min-w-full'>
        <div className=' flex flex-col pl-8 md:pl-24 justify-center h-full'>
            <h1 className=' mt-12 md:mt-0 text-4xl md:text-5xl font-medium '>
                {data?.title}
            </h1>
            <h1 className=' text-4xl md:text-6xl font-semibold '>
                {data?.title2}
            </h1>
            <p className=' mt-4 text-xl md:text-2xl text-slate-500 '>
                {data?.subTitle}
            </p>
            {/* <Link href={getHeroSectionData().link} className=' text-slate-100 self-start mt-8 bg-sky-900 px-8 py-4 rounded-md'>
                {data?.buttonName}
            </Link> */}
        </div>
        <div className=' mt-12 px-8 md:mt-0 self-center'>
            <Image className='w-full h-auto rounded-tr-full' src={data?.imageLink} alt='hero image' width={900} height={700} />
        </div>
        
    </div>
  )
}

export default HeroSection