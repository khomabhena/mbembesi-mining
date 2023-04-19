import React from 'react'
import EducationLayout from '../education-layout'

const ProfileOverview = () => {
  const about = "I am a dedicated and compassionate individual who strives to provide the best care I possibly can to patients. I'm excited by the prospect of working for a highly recognized long-term care facility like Crane & Jenkins, and I believe that my patient care skills make me a natural fit for this position."
  return (
    <div className='flex flex-col gap-8'>
      <div>
        <div className='self-start font-medium text-lg
            text-slate-600'>About</div>
        <div className='text-slate-500 mt-4'>{about}</div>
      </div>

      {/* Education */}
      <div>
        <div className='self-start font-medium text-lg
              text-slate-600'>Education</div>
        <EducationLayout letter='J' title='Nursing Diploma' sub='Midlands State University - (2011 - 2014)' text={about} />
      </div>

      {/* Experiences */}
      <div>
        <div className='self-start font-medium text-lg
              text-slate-600'>Experiences</div>
        <EducationLayout letter='N' title='Nursing Assistant' sub='Collin Saunders Hospital - (2015 - 2018)' text={about} />
      </div>

      {/* Languages */}
      <div>
        <div className='self-start font-medium text-lg
              text-slate-600'>Spoken Languages</div>
        <div className='flex gap-4 flex-wrap mt-4'>
          <div className='flex items-center w-min
            justify-center text-slate-700 px-4 py-1 bg-sky-600/40
            rounded-md'>English</div>
          <div className='flex items-center w-min
            justify-center text-slate-700 px-4 py-1 bg-sky-600/40
            rounded-md'>Ndebele</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileOverview