import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'
import SectionFooter from './section-footer'
import NavbarSocials from './navbar-socials'
import Script from 'next/script'

const Layout = ({ children }) => {
  return (
    <div className=' absolute min-h-screen text-emerald-600'>
      <Script type='text/javascript' src='/static/api.js'></Script>
        <div className=' fixed top-0 left-0 right-0 z-50 h-8 grid grid-cols-3 text-slate-300 justify-evenly text-sm items-center bg-slate-700'>
            <div id='marquee' className=' col-span-2 px-8 text-xs flex-1'></div>
            <div className=' hidden md:block'>
              <NavbarSocials />
            </div>
        </div>
        <Navbar />
        <Sidebar />
        {children}
        <SectionFooter />
    </div>
  )
}

export default Layout