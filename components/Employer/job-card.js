import { useStateContext } from '@/context/StateContext'
import React from 'react'

const JobCardEmployer = ({ data }) => {
    const {setJobDetails, setDetailsExpandedEmployer} = useStateContext()

    const handleClick = () => {
        setDetailsExpandedEmployer(prev => !prev)
        setJobDetails(data)
    }

  return (
    <div onClick={handleClick} className='bg-slate-50 rounded-md shadow-md px-8 py-4 mt-2 md:mt-0 cursor-pointer'>
        <div className=' text-xl font-semibold text-slate-600'>{data?.title}</div>
        <div className=' text-slate-500 text-sm'>{data?.company}</div>
        <div className=' mt-8 flex justify-between md:justify-start md:gap-32'>
            <div>
                <div className=' text-slate-600 text-lg font-semibold'>${data?.salary}</div>
                <div className=' text-slate-400 text-xs'>Monthly Salary</div>
            </div>
            <div>
                <div className='text-slate-600 text-lg font-semibold'>{data?.type}</div>
                <div className='text-slate-400 text-xs'>Employment type</div>
            </div>
        </div>
        <div className=' mt-8 text-slate-600 text-base'>{data?.description}</div>
        <div className=' my-8 flex justify-between md:justify-start md:gap-32'>
            <div className='text-slate-500 text-sm font-semibold'>{data?.profession}</div>
            <div className='text-slate-500 text-sm font-semibold'>{data?.country}</div>
        </div>

        {/* Status */}
        <div className=' mt-12 flex justify-between md:justify-end md:gap-32'>
            <div>
                <div className=' text-emerald-500 text-lg md:text-xl font-semibold'>12</div>
                <div className=' text-slate-400 text-xs'>Applications</div>
            </div>
            <button className=' bg-red-500 h-min py-2 px-8 text-slate-50 rounded-md shadow-md'>Delete</button>
        </div>
    </div>
  )
}

export default JobCardEmployer