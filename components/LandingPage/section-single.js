import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {GiCheckMark} from 'react-icons/gi'
import { BsDot } from 'react-icons/bs'

const SectionSingle = ({dot, data}) => {
  return (
    <div id={data?.id} className={` flex flex-col py-24 md:flex-row ${data?.reverse ? 'md:flex-row-reverse' : ''} ${data?.light ? 'bg-slate-100': ''} items-center gap-12 px-8 md:px-24`}>
        
        <div className=' flex-1'>
            <h3 className=' text-lg md:text-xl text-emerald-400 font-semibold'>{data?.heading}</h3>
            <h1 className=' text-3xl md:text-4xl font-semibold text-slate-600'>{data?.title}</h1>
            
            <span className=' flex items-center gap-8 px-8'>
              {dot ? <BsDot className=' text-2xl' /> : <GiCheckMark className=' text-2xl' />}
              <p className=' mt-4 text-md md:text-md text-slate-500' dangerouslySetInnerHTML={{__html: `${data?.subTitle}`}} ></p>
            </span>
            
            {data?.subTitleTwo && <span className=' flex items-center gap-8 px-8'>
              {dot ? <BsDot className=' text-2xl' /> : <GiCheckMark className=' text-2xl' />}
              <p className=' mt-4 text-md md:text-md text-slate-500' dangerouslySetInnerHTML={{__html: `${data?.subTitleTwo}`}} ></p>
            </span>}
            
            {data?.subTitleThree && <span className=' flex items-center gap-8 px-8'>
              {dot ? <BsDot className=' text-2xl' /> : <GiCheckMark className=' text-2xl' />}
              <p className=' mt-4 text-md md:text-md text-slate-500' dangerouslySetInnerHTML={{__html: `${data?.subTitleThree}`}} ></p>
            </span>}
            
            {data?.subTitleFour && <span className=' flex items-center gap-8 px-8'>
              {dot ? <BsDot className=' text-2xl' /> : <GiCheckMark className=' text-2xl' />}
              <p className=' mt-4 text-md md:text-md text-slate-500' dangerouslySetInnerHTML={{__html: `${data?.subTitleFour}`}} ></p>
            </span>}
        </div>

    </div>
  )
}

export default SectionSingle