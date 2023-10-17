import React from 'react'
import { FaFacebookF, FaInstagram , FaLinkedin} from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'
import { RiTwitterXLine } from 'react-icons/ri'

const NavbarSocials = () => {
  const getIcons = [
    {
      link: '#',
      icon: <RiTwitterXLine />
    },
    {
      link: '/facebook.com/mbembesi-mine',
      icon: <FaFacebookF />
    },
    {
      link: '#',
      icon: <FaInstagram />
    },
    {
      link: '#',
      icon: <FaLinkedin />
    },
    {
      link: '#',
      icon: <BsYoutube />
    },
  ]
  return (
    <div className='flex flex-col flex-1 h-full w-full'>
      <ol className=' flex h-full justify-center text-lg gap-8 items-center'>
        {
          getIcons.map((item, index) => (
            <li key={index} className=' cursor-pointer'>
              <a className=' cursor-pointer' target='_blank' href={item.link}>{item.icon}</a>
            </li>
          ))
        }
      </ol>
    </div>
  )
}

export default NavbarSocials