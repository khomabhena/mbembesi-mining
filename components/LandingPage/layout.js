import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'

const Layout = ({ children }) => {
  return (
    <div className=' relative min-h-screen text-emerald-600'>
        <Navbar />
        <Sidebar />
        {children}
    </div>
  )
}

export default Layout