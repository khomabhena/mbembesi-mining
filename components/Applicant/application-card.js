import { useAuthContext } from '@/context/AuthContext'
import { useStateContext } from '@/context/StateContext'
import { FirebaseStorage } from '@/firebase/fetch-data'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const ApplicationCard = ({ data }) => {
    const router = useRouter()
    const { user } = useAuthContext()
    const [myData, setMyData] = useState(null)
    const { setJobDetails, setApplicationExpanded} = useStateContext()

    useEffect(() => {
        setMyData(data)
    }, [data])

    const handleClick = () => {
        setApplicationExpanded(prev => !prev)
        setJobDetails(data)
    }

    const cancelApplication = async () => {
        let {result, error } = await FirebaseStorage().getData('applications-applicants', user.email)
        
        if (error) {
            return console.log(error)
        }
        
    }

  return (
    <div className='bg-slate-50 rounded-md shadow-md px-8 py-4 mt-2 md:mt-0'>
        <div onClick={handleClick} className=' cursor-pointer'>
            <div className=' text-xl font-semibold text-slate-600'>{myData?.title}</div>
            <div className=' text-slate-500 text-sm'>{myData?.company}</div>
            <div className=' mt-8 flex justify-between md:justify-start md:gap-32'>
                <div>
                    <div className=' text-slate-600 text-lg font-semibold'>${myData?.salary}</div>
                    <div className=' text-slate-400 text-xs'>Monthly Salary</div>
                </div>
                <div>
                    <div className='text-slate-600 text-lg font-semibold'>{myData?.type}</div>
                    <div className='text-slate-400 text-xs'>Employment type</div>
                </div>
            </div>
            <div className=' mt-8 text-slate-600 text-base'>{myData?.description}</div>
            <div className=' my-8 flex justify-between md:justify-start md:gap-32'>
                <div className='text-slate-500 text-sm font-semibold'>{myData?.profession}</div>
                <div className='text-slate-500 text-sm font-semibold'>{myData?.country}</div>
            </div>
        </div>

        {/* Status */}
        <div className=' mt-12 flex justify-between md:justify-end md:gap-32'>
            <div>
                <div className=' text-emerald-500 text-lg md:text-xl font-semibold'>{myData?.applicationStatus}</div>
                <div className=' text-slate-400 text-xs'>Application Status</div>
            </div>
            <button onClick={cancelApplication} className=' bg-red-500 h-min py-2 px-8 text-slate-50 rounded-md shadow-md'>Cancel</button>
        </div>
    </div>
  )
}

export default ApplicationCard