import { useAuthContext } from '@/context/AuthContext'
import { useStateContext } from '@/context/StateContext'
import React, { useState } from 'react'
import { BsArrowReturnRight } from 'react-icons/bs'
import { toastError, toastNormal, toastSuccess } from '../toast'
import Spinner from '../spinner'
import getDataFirebase from '@/firebase/getData'
import setDataFirebase from '@/firebase/set-data'

const JobDetails = () => {
    const {jobDetails, setJobDetails, setDetailsExpanded} = useStateContext()
    const { user } = useAuthContext()
    const [loading, setLoading] = useState(false)

    const desc = 'A Home Care Assistant, or Care Worker helps elderly or infirmed people live safely in their own homes. Their duties include assisting clients in daily tasks, performing domestic duties and delivering client reports.'
  
    const handleClick = () => {
        setDetailsExpanded(prev => !prev)
        setJobDetails(null)
    }

    const apply = async () => {
        setLoading(true)
        toastNormal("Getting your data!")
        let { result, error } = await getDataFirebase('applicants', user.email)
        
        if (error) {
            toastError("Data fetching failed")
            setLoading(false)
            return console.log(error)
        }
        toastSuccess("Data fetched")

        const applicantEmail = user.email
        const dataApplicant = {...jobDetails, applicationStatus: 'Pending'}
        const dataEmployer = {...result, jobUid: jobDetails.jobUid, jobEmail: jobDetails.email, applicantEmail: user.email, applicationStatus: 'Pending'}
    
        applyApplicant(dataApplicant, dataEmployer, jobDetails.email)
        // applyEmployer(dataEmployer, jobDetails.email)
    }

    const applyApplicant = async (data, dataEmployer, email) => {
        const { result, error } = await getDataFirebase("applications-applicants", user.email)

        // if (error) {
        //     toastError(`Failed to fetch your applications: ${error.code}`)
        //     return
        // }

        let applications = result
        if (applications === undefined || applications === null) {
            applications = []
            applications.push(data)
            // setData(APPLICATIONS, localStorage.getItem('userEmail'), {applications: applications})
            let { error } = setDataFirebase('applications-applicants', user.email, {applications: applications})
            if (error) {
                toastError("Applicant: Failed to apply!")
                return
            }

            toastSuccess("Applicant: You have applied for the job!")
            applyEmployer(dataEmployer, email)
        } else {
            const applications = result.applications
            applications.unshift(data)
            // FirebaseStorage().updateData(APPLICATIONS, localStorage.getItem('userEmail'), {applications: applications})
            let {error} = setDataFirebase("applications-applicants", user.email, {applications: applications})
            if (error) {
                toastError("Applicant: Failed to apply!")
                return
            }

            toastSuccess("Applicant: You have applied for the job!")
            applyEmployer(dataEmployer, email)
        }
    }

    const applyEmployer = async (data, email) => {
        const { result, error } = await getDataFirebase('applications-employer', email)

        // if (error) {
        //     toastError("Failed to fetch employer applications")
        //     return
        // }

        let applications = result
        if (applications === undefined || applications === null) {
            applications = []
            applications.push(data)
            let { error } = await setDataFirebase('applications-employer', email, {applications: applications})
            if (error) {
                toastError("Employer: Failed to apply!")
                return
            }

            toastSuccess("Employer: You have applied for the job!")
            setLoading(false)
        } else {
            const applications = result.applications
            applications.unshift(data)
            let { error } = setDataFirebase('applications-employer', email, {applications: applications})
            if (error) {
                toastError("Employer: Failed to apply!")
                return
            }

            toastSuccess("Employer: You have applied for the job!")
            setLoading(false)
        }   
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
            <div className='flex gap-8'>
                <div className={`${loading ? 'flex' : 'hidden'} ml-12`}>
                    <Spinner />
                </div> 
                <button onClick={apply} className=' bg-emerald-500 h-min py-2 px-8 text-slate-50 rounded-md shadow-md'>Apply</button>
            </div>
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