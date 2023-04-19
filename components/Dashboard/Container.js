import { useStateContext } from '@/context/StateContext'
import React from 'react'
import Navbar from './Navbar'

const Container = ({children, title}) => {
  const {expanded} = useStateContext()

  return (
    <div className={`${expanded ? 'md:ml-60' : ' md:ml-0'} min-h-screen`}>
      <Navbar title={title} />
      {children}
    </div>
  )
}

export default Container