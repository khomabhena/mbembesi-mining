import React, { useState, useEffect } from 'react'

const ExperienceApplicant = () => {
    const [title, setTitle] = useState('')
    const [company, setCompany] = useState('')
    const [yearStart, setYearStart] = useState('')
    const [yearEnd, setYearEnd] = useState('')
    const [intro, setIntro] = useState('')

    const handleClick = (event) => {
        event.preventDefault()
    }


  return (
    <div className=' bg-slate-50 shadow-sm rounded-md px-8 py-8'>
        <form onSubmit={handleClick}>
            <div className=' flex flex-col md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Job Title</label>
                    <input onChange={(e) => setTitle(e.target.value)} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder='Enter position title' />
                </div>
                <div className=' flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Company Name</label>
                    <input onChange={(e) => setCompany(e.target.value)} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder='Enter company name' />
                </div>
            </div>
            <div className=' flex flex-col mt-8 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Year Start</label>
                    <input onChange={(e) => setYearStart(e.target.value)} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type='date' placeholder='yyyy/mm/dd' />
                </div>
                <div className=' flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Year End</label>
                    <input onChange={(e) => setYearEnd(e.target.value)} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="date" placeholder='Enter your first name' />
                </div>
            </div>

            {/* Accomplishments */}
            <div className='self-start mt-12 font-medium text-lg
            text-slate-500'>Accomplishments</div>
            <div className=' flex flex-col mt-4 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Brief Overview</label>
                    <textarea onChange={(e) => setIntro(e.target.value)} rows={6} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder='Write a short paragraph stating your accomplishments' />
                </div>
            </div>

            <div className=' mt-12 flex justify-end'>
                <button type='submit' className=' bg-sky-600 h-min py-2 px-8 text-slate-50 rounded-md shadow-md'>Update</button>
            </div>
        </form>
    </div>
  )
}

export default ExperienceApplicant