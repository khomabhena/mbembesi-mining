import { useAuthContext } from '@/context/AuthContext'
import getDataFirebase from '@/firebase/getData'
import React, { useState, useEffect, useRef } from 'react'
import Spinner from '../spinner'
import { toastError, toastNormal, toastSuccess } from '../toast'
import updateData from '@/firebase/update-data'
import setDataFirebase from '@/firebase/set-data'
import getUniqueId from '@/firebase/get-unique-id'

const PostJobEmployer = () => {
    const { user } = useAuthContext()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    const refCountry = useRef('')
    const refDescription = useRef('')
    const refExperience = useRef('')
    const refProfession = useRef('')
    const refQualifications = useRef('')
    const refResponsibilities = useRef('')
    const refSalary = useRef('')
    const refSkills = useRef('')
    const refTitle = useRef('')
    const refType = useRef('')

    useEffect(() => {
        const getData = async () => {
            const { result, error } = await getDataFirebase("jobs", user.email)
            if (error) {
                toastNormal(error)
                return
            }

            setData(result)
        }

        getData()
    }, [user.email])

    const handleClick = async (event) => {
        event.preventDefault()
        setLoading(true)
        toastNormal("Uploading...")

        let newData = {
            country: refCountry.current.value,
            description: refDescription.current.value,
            experience: refExperience.current.value,
            profession: refProfession.current.value,
            qualifications: refQualifications.current.value,
            responsibilities: refResponsibilities.current.value,
            salary: refSalary.current.value,
            skills: refSkills.current.value,
            title: refTitle.current.value,
            type: refType.current.value,
            jobUid: getUniqueId('jobs'),
            email: user.email,
            date: "" + new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear()
            
        }

        let jobs = data
        if (jobs === undefined || jobs === null) {
            toastNormal("Uploading job")
            jobs = []
            jobs.push(newData)
            console.log(newData)
            
            const { result, error } = await setDataFirebase('jobs', user.email, {jobs: jobs})
            
            if (error)
                toastError(`Job upload failed 1: ${error.message}`)
            else {
                toastSuccess("Jobs upload successful")
                deleteValues()
            }
            
        } else {
            // console
            const job = data.jobs
            job.unshift(newData)
            const { result, error } = await updateData('jobs', user.email, {jobs: job})
            
            if (error)
                toastError(`Job upload failed 2: ${error.code}`)
            else {
                toastSuccess("Job upload successful")
                deleteValues()
            }
        }
        setLoading(false)
    } 

    const deleteValues = () => {
        refCountry.current.value = ''
        refDescription.current.value = ''
        refExperience.current.value = ''
        refProfession.current.value = ''
        refQualifications.current.value = ''
        refResponsibilities.current.value = ''
        refSalary.current.value = ''
        refSkills.current.value = ''
        refTitle.current.value = ''
        refType.current.value = ''
    }

  return (
    
    <div className=' bg-slate-50 shadow-sm rounded-md px-8 py-8'>
        <form onSubmit={handleClick}>
            <div className=' flex flex-col md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Job Title</label>
                    <input ref={refTitle} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder="What's the job title" />
                </div>
                <div className=' flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Expected Salary per month</label>
                    <input ref={refSalary} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="number" placeholder='Enter the expected salary per month' />
                </div>
            </div>
            <div className=' flex flex-col mt-8 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Location</label>
                    <input ref={refCountry} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder='Where is the job located?' />
                </div>
                <div className=' flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Job Type</label>
                    <select ref={refType} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent'>
                        <option value='Nurse'>Nurse</option>
                        <option value='Nurse Aid'>Nurse Aid</option>
                        <option value='Adult Care'>Adult Care</option>
                        <option value='Hospice Care'>Hospice Care</option>
                    </select>
                </div>
            </div>
            <div className=' flex flex-col mt-8 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Experience</label>
                        <select ref={refExperience} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent'>
                            <option value='Nurse'>At least 1 year</option>
                            <option value='Nurse Aid'>3 years</option>
                            <option value='Adult Care'>5 years</option>
                            <option value='Hospice Care'>More than 5 years</option>
                    </select>
                </div>
                <div className=' flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Employment Type</label>
                    <select ref={refProfession} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent'>
                        <option value='Nurse'>Contract</option>
                        <option value='Nurse Aid'>Part-time</option>
                        <option value='Adult Care'>Full-time</option>
                    </select>
                </div>
            </div>

            <div className=' flex flex-col mt-12 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Job Description</label>
                    <textarea ref={refDescription} rows={6} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder='Write a short paragraph describing the job' />
                </div>
            </div>
            <div className=' flex flex-col mt-12 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Responsibilities</label>
                    <textarea ref={refResponsibilities} rows={6} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder='Describe the job responsibilities' />
                </div>
            </div>
            <div className=' flex flex-col mt-12 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Required Qualifications</label>
                    <textarea ref={refQualifications} rows={6} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder='List qualifications required' />
                </div>
            </div>
            <div className=' flex flex-col mt-12 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Skills</label>
                    <textarea ref={refSkills} rows={6} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder='Required skills for the job' />
                </div>
            </div>

            <div className=' mt-12 flex justify-end'> 
                <div className={`${loading ? 'flex' : 'hidden'} ml-12`}>
                    <Spinner />
                </div>    
                <button type='submit' className=' bg-sky-600 h-min py-2 px-8 text-slate-50 rounded-md shadow-md'>Create Job</button>
            </div>
        </form>
    </div>
  )
}

export default PostJobEmployer