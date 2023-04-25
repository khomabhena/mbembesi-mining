import Image from 'next/image'
import React from 'react'
import SocialIcons from '../social-icons'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { GrNotes } from 'react-icons/gr'
import { AiOutlineDownload } from 'react-icons/ai'
import { IoLogoWhatsapp, IoMdCall } from 'react-icons/io'

const ProfileDetails = ({data}) => {
  return (
    <div className='flex flex-col items-center gap-8 mt-8 w-full'>
        <Image className='h-24 w-24 shadow-lg ring ring-sky-500 object-cover rounded-full' 
          src={data?.profileUrl || "/person.jpg"} width={200} height={200} alt='picture' />
        <div>
          <div className='font-semibold text-xl text-slate-600' >{data?.firstName + " " + data?.lastName || "Emily Burner"}</div>
          <div className='text-center text-slate-500 text-base'>{data?.profession || 'Hospice Care'}</div>
        </div>
        
        {/* Social Icons */}
        <div className='flex flex-wrap gap-4'>
          <SocialIcons><FaFacebookF /></SocialIcons>
          <SocialIcons><BsTwitter /></SocialIcons>
          <SocialIcons><IoLogoWhatsapp /></SocialIcons>
          <SocialIcons><IoMdCall /></SocialIcons>
        </div>

        <div className='h-px w-full bg-slate-300'></div>

        {/* Resume */}
        <div className='self-start font-medium text-lg 
          text-slate-600'>View Resume</div>
        <div className='flex items-center w-full justify-between'>
          <div className='flex items-center gap-4'>
            <div className='flex items-center justify-center 
            h-6 w-6 rounded-sm ring-1'>
              <GrNotes />
            </div>
            <div className='text-slate-500 text-base'>{data?.cv || 'No CV.pdf'}</div>
          </div>
          <div className='flex items-center justify-center 
            h-6 w-6 rounded-sm ring-1'>
            <AiOutlineDownload />
          </div>
        </div>

        {/* Contacts */}
        <div className='h-px w-full bg-slate-300'></div>
        <div className='self-start font-medium text-lg 
          text-slate-600'>Contact Information</div>
        <div className='flex flex-col gap-4 w-full '>
          <div className='flex w-full justify-between'>
            <div className=' font-medium text-slate-600'>Email</div>
            <div className=' text-slate-500 text-base'>{data?.email || 'youremail@gmail.com'}</div>
          </div>
          <div className='flex w-full justify-between'>
            <div className=' font-medium text-slate-600'>Phone</div>
            <div className=' text-slate-500 text-base'>{data?.phone ||'+263774******'}</div>
          </div>
          <div className='flex w-full justify-between'>
            <div className=' font-medium text-slate-600'>Country</div>
            <div className=' text-slate-500 text-base'>{data?.country || 'Zim'}</div>
          </div>
        </div>
        
    </div>
  )
}

export default ProfileDetails