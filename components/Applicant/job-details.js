import { useStateContext } from '@/context/StateContext'
import React from 'react'
import { BsArrowReturnRight } from 'react-icons/bs'

const JobDetails = () => {
    const {jobDetails, setJobDetails, setDetailsExpanded} = useStateContext()

    const desc = 'A Home Care Assistant, or Care Worker helps elderly or infirmed people live safely in their own homes. Their duties include assisting clients in daily tasks, performing domestic duties and delivering client reports.'
  
    const handleClick = () => {
        setDetailsExpanded(prev => !prev)
        setJobDetails(null)
    }

    return (
    <div className=' overscroll-contain'>
        <div className='flex items-center gap-8'>
            <div onClick={handleClick} className='text-2xl text-slate-600 cursor-pointer'><BsArrowReturnRight /></div>
            <div className=' font-bold text-lg text-slate-500'>Job Details</div>
        </div>
        <div className=' mt-8 flex justify-between'>
            <div>
                <div className='text-lg md:text-xl font-semibold text-slate-600'>{jobDetails?.title}</div>
                <div className='text-slate-500 text-sm'>{jobDetails?.company}</div>
            </div>
            <button className=' bg-emerald-500 h-min py-2 px-8 text-slate-50 rounded-md shadow-md'>Apply</button>
        </div>

        <div className='mt-8 md:flex gap-8'>
            <div className='flex gap-8'>
                <div>
                    <div className='text-slate-600 text-lg font-semibold'>{jobDetails?.experience}</div>
                    <div className='text-slate-400 text-xs'>Experience</div>
                </div>
                <div>
                    <div className='text-slate-600 text-lg font-semibold'>{jobDetails?.type}</div>
                    <div className='text-slate-400 text-xs'>Employment type</div>
                </div>
            </div>
            <div className='flex gap-8'>
                <div>
                    <div className='text-slate-600 text-lg font-semibold'>{jobDetails?.country}</div>
                    <div className='text-slate-400 text-xs'>Location</div>
                </div>
                <div>
                    <div className='text-slate-600 text-lg font-semibold'>${jobDetails?.salary}</div>
                    <div className='text-slate-400 text-xs'>Monthly</div>
                </div>
            </div>
        </div>

        <div className=' mt-8'>
            <div className='self-start font-medium text-lg text-slate-600'>Job Description</div>
            <div className='text-slate-500 mt-2'>{jobDetails?.description}</div>
        </div>
        <div className=' mt-8'>
            <div className='self-start font-medium text-lg text-slate-600'>Responsibilities</div>
            <div className='text-slate-500 mt-2'>{jobDetails?.responsibilities}</div>
        </div>
        <div className=' mt-8'>
            <div className='self-start font-medium text-lg text-slate-600'>Qualifications</div>
            <div className='text-slate-500 mt-2'>{jobDetails?.qualifications}</div>
        </div>
        <div className=' mt-8'>
            <div className='self-start font-medium text-lg text-slate-600'>Skills &amp; Experience</div>
            <div className='text-slate-500 mt-2'>{jobDetails?.skills}</div>
        </div>
    </div>
  )
}

export default JobDetails