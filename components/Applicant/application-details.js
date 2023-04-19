import { useStateContext } from '@/context/StateContext'
import React from 'react'
import { BsArrowReturnRight } from 'react-icons/bs'

const ApplicationDetails = () => {
    const {applicationExpanded, setApplicationExpanded} = useStateContext()

    const desc = 'A Home Care Assistant, or Care Worker helps elderly or infirmed people live safely in their own homes. Their duties include assisting clients in daily tasks, performing domestic duties and delivering client reports.'
  
    return (
    <div className=' overscroll-contain'>
        <div className='flex items-center gap-8'>
            <div onClick={() => setApplicationExpanded(prev => !prev)} className='text-2xl text-slate-600 cursor-pointer'><BsArrowReturnRight /></div>
            <div className=' font-bold text-lg text-slate-500'>Application Details</div>
        </div>
        <div className=' mt-8 flex justify-between'>
            <div>
                <div className='text-lg md:text-xl font-semibold text-slate-600'>Home nurse aid</div>
                <div className='text-slate-500 text-sm'>Uk Care Connection</div>
            </div>
        </div>

        <div className='mt-8 md:flex gap-8'>
            <div className='flex gap-8'>
                <div>
                    <div className='text-slate-600 text-lg font-semibold'>5 years</div>
                    <div className='text-slate-400 text-xs'>Experience</div>
                </div>
                <div>
                    <div className='text-slate-600 text-lg font-semibold'>Part-time</div>
                    <div className='text-slate-400 text-xs'>Employment type</div>
                </div>
            </div>
            <div className='flex gap-8'>
                <div>
                    <div className='text-slate-600 text-lg font-semibold'>London</div>
                    <div className='text-slate-400 text-xs'>Location</div>
                </div>
                <div>
                    <div className='text-slate-600 text-lg font-semibold'>$950</div>
                    <div className='text-slate-400 text-xs'>Monthly</div>
                </div>
            </div>
        </div>

        <div className=' mt-8'>
            <div className='self-start font-medium text-lg text-slate-600'>Job Description</div>
            <div className='text-slate-500 mt-2'>{desc}</div>
        </div>
        <div className=' mt-8'>
            <div className='self-start font-medium text-lg text-slate-600'>Responsibilities</div>
            <div className='text-slate-500 mt-2'>{desc}</div>
        </div>
        <div className=' mt-8'>
            <div className='self-start font-medium text-lg text-slate-600'>Qualifications</div>
            <div className='text-slate-500 mt-2'>{desc}</div>
        </div>
        <div className=' mt-8'>
            <div className='self-start font-medium text-lg text-slate-600'>Skills &amp; Experience</div>
            <div className='text-slate-500 mt-2'>{desc}</div>
        </div>
    </div>
  )
}

export default ApplicationDetails