import { useStateContext } from '@/context/StateContext'
import Image from 'next/image'
import React from 'react'

const ApplicationsCard = () => {
    const about = "I am a dedicated and compassionate individual who strives to provide the best care I possibly can to patients. I'm excited by the prospect of working for a highly recognized long-term care facility like Crane & Jenkins, and I believe that my patient care skills make me a natural fit for this position."
    const {setApplicantDetailsExpanded} = useStateContext()
    return (
    <div>
        
        <div>
            <div className=' mt-8 sticky top-0 px-8 text-xl bg-sky-700 bg-opacity-95 rounded-md py-2 font-semibold text-slate-200'>Home nurse aid</div>
            <ol className='mt-4 list-decimal text-slate-400'>
                <li onClick={() => setApplicantDetailsExpanded(prev => !prev)} className=' bg-slate-100 px-8 py-8 rounded-md mt-4 cursor-pointer'>
                    <div className=' flex gap-8'>
                        <Image className='rounded-full object-cover w-20 h-20 md:h-24 md:w-24 ring-offset-2 ring-2 ring-sky-600'
                            src="/person.jpg" width={400} height={400} alt='image' />
                            <div>
                                <h1 className='text-lg md:text-xl font-semibold text-slate-600'>Kholwani Kholwani Mabhena</h1>
                                <p className=' text-slate-500 text-sm'>colwanymab@gmail.com</p>
                                <p className=' text-slate-500 font-semibold text-sm mt-2'>Hospice Care</p>
                                <p className=' text-slate-500 text-sm'>Zimbabwe</p>
                            </div>
                    </div>
                    <p className=' text-slate-600 mt-8'>{about}</p>
                </li>
                
            </ol>
        </div>

    </div>
  )
}

export default ApplicationsCard