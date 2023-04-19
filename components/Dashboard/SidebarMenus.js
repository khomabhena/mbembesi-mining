import { useStateContext } from '@/context/StateContext'
import Link from 'next/link'
import React, { useEffect } from 'react'

const SidebarMenus = ({data}) => {
  const { windowSize, setExpanded, activeLink, setActiveLink } = useStateContext()

  

  const handleClick = (link) => {
    setActiveLink(link)
    if (windowSize <= 768)
      setExpanded(false)
  }

  return (
    <div className='flex flex-col gap-4 mx-2 mt-12 text-slate-200'>
      {
        data?.map((item, index) => (
          <Link href={item.link} key={index} onClick={() => handleClick(item.link)}>
            <div className={`flex items-center py-2 px-2 rounded-md cursor-pointer 
                gap-4 hover:bg-slate-900 hover:bg-opacity-30 
                transition-all ${activeLink === item.link ? 'bg-slate-900 bg-opacity-30' : ''} `} >
                <span className='text-sky-300 text-xl '>{item.icon}</span>
                <span className='text-lg font-light'>{item.name}</span>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default SidebarMenus