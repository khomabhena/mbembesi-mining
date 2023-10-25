import { useStateContext } from '@/context/StateContext'
import {getButtonName, getNavMenu} from '@/data/nav-menu'
import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Sidebar from './sidebar'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import NavbarSocials from './navbar-socials'
// import { logo } from '/logo.png'


const Navbar = () => {
    const { setWebSidebar } = useStateContext()

    const handleMobileMenu = () => {
        setWebSidebar(prev => !prev)
    }

  return (
    <div className='fixed z-10 h-20 bg-slate-100 left-0 top-8 right-0'>
        <Script type='text/javascript' src='/static/api.js'></Script>
        {/* <div className=' h-8 grid grid-cols-3 text-slate-300 justify-evenly text-sm items-center bg-slate-700'>
            <div id='marquee' className=' col-span-2 px-8 text-sm flex-1'></div>
            <NavbarSocials />
        </div> */}
        {/* Main Navbar */}
        <div className='flex z-50 shadow-md justify-between items-center pl-2 pr-16 md:px-20 h-full'>
            <Link className=' h-full' href='/'>
            <Image className=' h-full w-auto py-0' src='/logo.png' width={685} height={346} alt='logo' />
            </Link>
            {/* <h1 className=' font-extrabold text-xl text-emerald-600'>
            </h1> */}
            <ol className=' hidden md:flex gap-4 text-slate-500 items-center text-md'>
                {
                    getNavMenu().map(({name, link}, index) => (
                        <li className=' cursor-pointer hover:text-lg py-4 hover:border-b-2 hover:border-sky-900' key={index}>
                            <a href={link}>{name}</a>
                        </li>
                    ))
                }
            </ol>
            <AiOutlineMenu onClick={handleMobileMenu} className=' md:hidden cursor-pointer' size={24} />
        </div>
        
    </div>
  )
}

export default Navbar