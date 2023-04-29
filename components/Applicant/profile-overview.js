import React from 'react'
import EducationLayout from '../education-layout'

const ProfileOverview = ({ data }) => {
  const about = "I am a dedicated and compassionate individual who strives to provide the best care I possibly can to patients. I'm excited by the prospect of working for a highly recognized long-term care facility like Crane & Jenkins, and I believe that my patient care skills make me a natural fit for this position."
  return (
    <div className='flex flex-col gap-8'>
      <div>
        <div className='self-start font-medium text-lg
            text-slate-600'>About</div>
        <div className='text-slate-500 mt-4'>{data?.intro || about}</div>
      </div>

      {/* Education */}
      <div>
        <div className='self-start font-medium text-lg
              text-slate-600'>Qualifications</div>
              {
                data?.qualifications?.map((item, index) => (
                  <EducationLayout 
                    key={index} 
                    letter={item.degree.charAt(0)} 
                    title={item.degree}
                    sub={item.institution + " - (" + item.yearStart + " - " + item.yearEnd + ")"}
                    text={item.intro} />
                ))
              }
      </div>

      {/* Experiences */}
      <div>
        <div className='self-start font-medium text-lg
              text-slate-600'>Experiences</div>
              {
                data?.experience?.map((item, index) => (
                  <EducationLayout 
                    key={index} 
                    letter={item.title.charAt(0)} 
                    title={item.title}
                    sub={item.company + " - (" + item.yearStart + " - " + item.yearEnd + ")"}
                    text={item.intro} />
                ))
              }
      </div>

      {/* Languages */}
      <div>
        <div className='self-start font-medium text-lg
              text-slate-600'>Spoken Languages</div>
        <div className='flex gap-4 flex-wrap mt-4'>
          {
            data?.languages.map((item, index) => (
              <div key={index} className='flex items-center w-min
                justify-center text-slate-700 px-4 py-1 bg-sky-600/40
                rounded-md'>{item}</div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProfileOverview