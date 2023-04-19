import { useStateContext } from '@/context/StateContext'
import React from 'react'
import { BsArrowReturnRight } from 'react-icons/bs'
import ProfileDetails from '../Applicant/profile-details'
import ProfileOverview from '../Applicant/profile-overview'

const ApplicantDetails = () => {
    const {setApplicantDetailsExpanded} = useStateContext()

    const desc = 'A Home Care Assistant, or Care Worker helps elderly or infirmed people live safely in their own homes. Their duties include assisting clients in daily tasks, performing domestic duties and delivering client reports.'
  
    return (
    <div className=' overscroll-contain'>
        <div className='flex items-center gap-8'>
            <div onClick={() => setApplicantDetailsExpanded(prev => !prev)} className='text-2xl text-slate-600 cursor-pointer'><BsArrowReturnRight /></div>
            <div className=' font-bold text-lg text-slate-500'>Applicant Details</div>
        </div>
        <div className=' md:flex gap-4 mt-8'>
            <div className={`bg-slate-50 shadow-lg rounded px-4 pt-4 pb-8 w-full md:w-2/5`} >
                <ProfileDetails />
            </div>
            <div className={`bg-slate-50 shadow-lg rounded-md mt-8 md:mt-0 px-4 pt-4 pb-8 w-full md:w-3/5`}>
                <ProfileOverview />
            </div>
        </div>
    </div>
  )
}

export default ApplicantDetails