import { useAuthContext } from '@/context/AuthContext'
import Image from 'next/image'
import React from 'react'
import { FiSettings } from 'react-icons/fi'

const Navbar = ({title}) => {

  const { logout } = useAuthContext()



  return (
    <div className=' bg-slate-50 shadow-md px-16 py-4 md:py-0 md:h-24 
      flex flex-col md:flex-row justify-center md:justify-between md:items-center gap-4'>
      <div className='font-semibold text-slate-500 text-lg md:text-2xl'>{title}</div>
      <div className=' flex items-center gap-8 justify-between md:justify-end'>
        <div className=' flex items-center gap-4'>
          <Image className='rounded-full w-6 h-6 md:h-8 md:w-8 ring-offset-2 ring-2 ring-sky-600' 
            src="/ukc-favicon-color.png" width={30} height={30} alt='image' />
          <div className='font-medium text-slate-500'>Hi, Kholwani</div>
        </div>
        <div>
          <div onClick={() => logout}><FiSettings className=' text-slate-500 text-xl cursor-pointer' /></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar