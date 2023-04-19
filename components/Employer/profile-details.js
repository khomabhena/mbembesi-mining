import Image from 'next/image'
import React from 'react'
import SocialIcons from '../social-icons'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { GrNotes } from 'react-icons/gr'
import { AiOutlineDownload } from 'react-icons/ai'
import { IoLogoWhatsapp, IoMdCall } from 'react-icons/io'

const ProfileDetailsEmployer = () => {
  return (
    <div className='flex flex-col items-center gap-8 mt-8 w-full'>
        <Image className='h-24 w-24 shadow-lg ring ring-sky-500 object-cover rounded-full' 
          src="/person.jpg" width={200} height={200} alt='picture' />
        <div>
          <div className='font-semibold text-xl text-slate-600' >UK Care Connection</div>
        </div>
        
        {/* Social Icons */}
        <div className='flex flex-wrap gap-4'>
          <SocialIcons><FaFacebookF /></SocialIcons>
          <SocialIcons><BsTwitter /></SocialIcons>
          <SocialIcons><IoMdCall /></SocialIcons>
        </div>

        {/* Contacts */}
        <div className='h-px w-full bg-slate-300'></div>
        <div className='self-start font-medium text-lg 
          text-slate-600'>Contact Information</div>
        <div className='flex flex-col gap-4 w-full '>
          <div className='flex w-full justify-between'>
            <div className=' font-medium text-slate-600'>Owner</div>
            <div className=' text-slate-500 text-base'>Brian MacFee</div>
          </div>
          <div className='flex w-full justify-between'>
            <div className=' font-medium text-slate-600'>Employees</div>
            <div className=' text-slate-500 text-base'>50 to 10</div>
          </div>
          <div className='flex w-full justify-between'>
            <div className=' font-medium text-slate-600'>Location</div>
            <div className=' text-slate-500 text-base'>Zimbabwe</div>
          </div>
          <div className='flex w-full justify-between'>
            <div className=' font-medium text-slate-600'>Website</div>
            <div className=' text-slate-500 text-base'>ukcareconnection.com</div>
          </div>
        </div>
        
    </div>
  )
}

export default ProfileDetailsEmployer