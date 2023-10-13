import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {GiCheckMark} from 'react-icons/gi'
import { BsDot } from 'react-icons/bs'

const SectionSingle = ({dot, data}) => {
  return (
    <div className={` flex flex-col h-80 w-full py-24 md:flex-row bg-slate-100 items-center gap-12 px-8 md:px-24`}>
        
        <div className=' flex flex-col items-center w-full '>
          <p>69 Josiah Chinamano, Donnington,Bulawayo Zimababwe</p>
          <p>info@mbembesimining.com</p>
          <p>www.mbembesimining.com</p>
        </div>

    </div>
  )
}

export default SectionSingle