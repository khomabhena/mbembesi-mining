import React from 'react'
import EducationLayout from '../education-layout'

const ProfileOverviewEmployer = ({ data }) => {
  const about = "I am a dedicated and compassionate individual who strives to provide the best care I possibly can to patients. I'm excited by the prospect of working for a highly recognized long-term care facility like Crane & Jenkins, and I believe that my patient care skills make me a natural fit for this position."
  return (
    <div className='flex flex-col gap-8'>
      <div>
        <div className='self-start font-medium text-lg
            text-slate-600'>About</div>
        <div className='text-slate-500 mt-4'>{data?.intro}</div>
      </div>
    </div>
  )
}

export default ProfileOverviewEmployer