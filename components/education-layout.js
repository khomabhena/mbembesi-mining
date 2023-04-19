import React from 'react'
import SocialIcons from './social-icons'

const EducationLayout = ({letter, title, sub, text}) => {
  return (
    <div className='flex gap-4 mt-4'>
        <div className='hidden md:flex items-center 
        justify-center h-8 w-8 p-4 bg-sky-600/40 
        rounded-md'>{letter}</div>
        <div>
            <div className='font-medium text-slate-500'>{title}</div>
            <div className='text-slate-500'>{sub}</div>
            <div className='text-slate-500'>{text}</div>
        </div>
    </div>
  )
}

export default EducationLayout