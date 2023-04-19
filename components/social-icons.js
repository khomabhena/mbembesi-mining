import React from 'react'
import { FaFacebookF } from 'react-icons/fa'


const SocialIcons = ({children}) => {
  return (
    <div className='flex items-center justify-center 
    h-8 w-10 bg-sky-600/40 rounded-md '>{children}</div>
  )
}

export default SocialIcons