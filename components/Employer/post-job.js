import React from 'react'

const PostJobEmployer = () => {
  return (
    
    <div className=' bg-slate-50 shadow-sm rounded-md px-8 py-8'>
        <form>
            <div className=' flex flex-col md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Job Title</label>
                    <input className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder="What's the job title" />
                </div>
                <div className=' flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Expected Salary per month</label>
                    <input className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="number" placeholder='Enter the expected salary per month' />
                </div>
            </div>
            <div className=' flex flex-col mt-8 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Location</label>
                    <input className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder='Where is the job located?' />
                </div>
                <div className=' flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Job Type</label>
                    <select className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent'>
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
                        <select className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent'>
                            <option value='Nurse'>At least 1 year</option>
                            <option value='Nurse Aid'>3 years</option>
                            <option value='Adult Care'>5 years</option>
                            <option value='Hospice Care'>More than 5 years</option>
                    </select>
                </div>
                <div className=' flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Employment Type</label>
                    <select className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent'>
                        <option value='Nurse'>Contract</option>
                        <option value='Nurse Aid'>Part-time</option>
                        <option value='Adult Care'>Full-time</option>
                    </select>
                </div>
            </div>

            <div className=' flex flex-col mt-12 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Job Description</label>
                    <textarea rows={6} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder='Write a short paragraph describing the job' />
                </div>
            </div>
            <div className=' flex flex-col mt-12 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Responsibilities</label>
                    <textarea rows={6} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder='Describe the job responsibilities' />
                </div>
            </div>
            <div className=' flex flex-col mt-12 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Required Qualifications</label>
                    <textarea rows={6} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder='List qualifications required' />
                </div>
            </div>
            <div className=' flex flex-col mt-12 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Skills</label>
                    <textarea rows={6} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder='Required skills for the job' />
                </div>
            </div>

            <div className=' mt-12 flex justify-end'>   
                <button className=' bg-sky-600 h-min py-2 px-8 text-slate-50 rounded-md shadow-md'>Create Job</button>
            </div>
        </form>
    </div>
  )
}

export default PostJobEmployer