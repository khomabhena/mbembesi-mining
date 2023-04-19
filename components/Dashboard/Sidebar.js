import { useStateContext } from '@/context/StateContext'
import Image from 'next/image'
import React, { useEffect } from 'react'
import SidebarMenus from './SidebarMenus'
import { applicantMenu, employerMenu } from '../Data'

const Sidebar = ({menu}) => {

  const {expanded, setExpanded} = useStateContext()

  useEffect(() => {
    if (typeof window !== 'undefined') {
        window.innerWidth >= 768 ? setExpanded(true) : setExpanded(false) 
    }
  }, [setExpanded])

  return (
    <div className={`fixed flex z-20 w-full md:w-min transition duration-1000 ease-in-out `}>
      <div className={`${expanded ? 'block' : 'hidden'} 
         w-3/4 md:w-60 h-screen bg-gradient-to-tr from-sky-900 to-sky-700`}>
          <div className=''>
                <Image className='w-32 bg-cover h-auto ml-4 mt-8' width={100} height={50} src='/ukc-logo-white.png' alt='logo' />
          </div>
          <SidebarMenus data={menu} />
         </div>

      <div onClick={() => setExpanded(prev => !prev)} 
        className='text-slate-900 z-10 h-min cursor-pointer px-2 py-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
        className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    </div>
  )
}

export default Sidebar