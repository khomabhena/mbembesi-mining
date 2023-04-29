import React, { useState, useEffect, useRef } from 'react'
import Spinner from '../spinner'
import getDataFirebase from '@/firebase/getData'
import updateData from '@/firebase/update-data'
import { toastError, toastNormal, toastSuccess } from '../toast'
import { useAuthContext } from '@/context/AuthContext'

const QualificationsApplicant = () => {
    const { user } = useAuthContext()
    let [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    const refDegree = useRef('')
    const refInstitution = useRef('')
    const refYearStart = useRef('')
    const refYearEnd = useRef('')
    const refIntro = useRef('')

    useEffect(() => {
        const getData = async () => {
            const { result, error } = await getDataFirebase("applicants", user.email)
            if (error)
                return

            setData(result)
        }

        getData()
    }, [user.email])

    const handleClick = async (event) => {
        event.preventDefault()
        setLoading(true)
        toastNormal("Uploading...")

        let newData = {
            degree: refDegree.current.value,
            institution: refInstitution.current.value,
            yearStart: refYearStart.current.value,
            yearEnd: refYearEnd.current.value,
            intro: refIntro.current.value
        }

        let qualifications = data?.qualifications
        if (qualifications === undefined)
            qualifications = []
        
        qualifications.unShift(newData)
        const { result, error } = await updateData("applicants", user.email, { qualifications })
    
        if (error)
            return toastError("Failed to update!")
        else
            toastSuccess("Data updated successfully!")
        
        refDegree.current.value = ''
        refInstitution.current.value = ''
        refYearStart.current.value = ''
        refYearEnd.current.value = ''
        refIntro.current.value = ''
        
        setLoading(false)
    }

  return (
    <div className=' bg-slate-50 shadow-sm rounded-md px-8 py-8'>
        <form onSubmit={handleClick}>
            <div className=' flex flex-col md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Degree Name or Similar</label>
                    <input ref={refDegree} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder='Enter your program name' />
                </div>
                <div className=' flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Institution</label>
                    <input ref={refInstitution} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder='Enter name of your Institution' />
                </div>
            </div>
            <div className=' flex flex-col mt-8 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Year Start</label>
                    <input ref={refYearStart} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type='month' placeholder='yyyy/mm/dd' />
                </div>
                <div className=' flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Year End</label>
                    <input ref={refYearEnd} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="month" placeholder='Enter your first name' />
                </div>
            </div>

            {/* Accomplishments */}
            <div className='self-start mt-12 font-medium text-lg
            text-slate-500'>Accomplishments</div>
            <div className=' flex flex-col mt-4 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Brief Overview</label>
                    <textarea ref={refIntro} rows={6} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder='Write a short paragraph stating your accomplishments' />
                </div>
            </div>

            <div className=' mt-12 flex justify-end'>
                <div className={`${loading ? 'flex' : 'hidden'} ml-12`}>
                    <Spinner />
                </div>       
                <button type='submit' className=' bg-sky-600 h-min py-2 px-8 text-slate-50 rounded-md shadow-md'>Update</button>
            </div>
        </form>
    </div>
  )
}

export default QualificationsApplicant