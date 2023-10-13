import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'
import SectionFooter from './section-footer'

const Layout = ({ children }) => {
  return (
    <div className=' absolute min-h-screen text-emerald-600'>
        <Navbar />
        <Sidebar />
        {children}
        <SectionFooter />
    </div>
  )
}

export default Layout