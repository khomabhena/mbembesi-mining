import { useStateContext } from '@/context/StateContext'
import React from 'react'

const JobCard = ({ data }) => {
    const {setJobDetails, setDetailsExpanded} = useStateContext()
    const handleClick = () => {
        setDetailsExpanded(prev => !prev)
        setJobDetails(data)
    }

  return (
    <div onClick={handleClick} className='bg-slate-50 rounded-md shadow-md px-8 py-4 mt-2 md:mt-0 cursor-pointer'>
        <div className=' text-xl font-semibold text-slate-600'>{data?.title || 'Job Title'}</div>
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
    </div>
  )
}

export default JobCard