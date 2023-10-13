import { useStateContext } from '@/context/StateContext'
import { getButtonName, getNavMenu } from '@/data/nav-menu'
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const Sidebar = () => {
    const { webSidebar, setWebSidebar } = useStateContext()

    const handleMobileMenu = () => {
        setWebSidebar(prev => !prev)
    }

  return (
    <div className={` ${webSidebar ? 'block' : 'hidden'} fixed bg-slate-950 z-50 bg-opacity-95 h-screen left-0 top-0 right-0 bottom-0`}>
        <AiOutlinePlus onClick={handleMobileMenu} className=' absolute top-0 right-0 m-8 rotate-45 cursor-pointer text-slate-100 h-12 w-12' />
            {/* Menu Items */}
            
            <div className=' flex flex-col py-12 h-full justify-evenly'>
                <ol className=' flex flex-col gap-12 items-center text-slate-200'>
                    {
                        getNavMenu().map(({name, link}, index) => (
                            <li onClick={handleMobileMenu} className=' cursor-pointer hover:text-lg hover:font-semibold' key={index}>
                                <a href={link}>{name}</a>
                            </li>
                        ))
                    }
                </ol>
                {/* <button className=' bg-sky-700 text-slate-100 w-fit self-center px-8 py-2 rounded-md'>{getButtonName()}</button> */}
            </div>
    </div>
  )
}

export default Sidebar