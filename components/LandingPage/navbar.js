import { useStateContext } from '@/context/StateContext'
import {getButtonName, getNavMenu} from '@/data/nav-menu'
import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Sidebar from './sidebar'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'

const Navbar = () => {
    const { setWebSidebar } = useStateContext()

    const handleMobileMenu = () => {
        setWebSidebar(prev => !prev)
    }

  return (
    <div className='fixed z-10 h-24 bg-slate-100 left-0 top-0 right-0'>
        <Script type='text/javascript' src='/static/api.js'></Script>
        
        {/* Main Navbar */}
        <div className='flex z-50 shadow-md justify-between items-center px-16 md:px-24 fixed top-0 left-0 right-0 h-24'>
            {/* <Link href='/'>
                <Image className=' h-full w-auto py-6 md:py-4' src='/logo-color.png' alt='' width={200} height={150} />
            </Link> */}
            <h1 className=' font-extrabold text-xl text-emerald-600'>MBEMBESI MINING HOUSE</h1>
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
            {/* <Link href='/employer/signin' className=' hidden md:flex bg-sky-900 text-slate-100 w-fit self-center px-8 py-2 rounded-md'>{getButtonName()}</Link> */}
        </div>
        <div id='marquee' className='h-6 flex justify-end text-yellow-400 text-sm items-center bg-slate-900'>
            
        </div>
    </div>
  )
}

export default Navbar