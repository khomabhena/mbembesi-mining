import ExperienceApplicant from '@/components/Applicant/experience'
import ApplicantDashboard from '@/components/Dashboard/applicant-dashboard'
import { StateContext } from '@/context/StateContext'
import React from 'react'

const Experience = () => {
  return (
    <div className='flex flex-col gap-4 mx-4 md:mx-8 mt-8 pb-12'>
      <ExperienceApplicant />
    </div>
  )
}

Experience.getLayout = (page) => (
  <ApplicantDashboard>
      {page}
    </ApplicantDashboard>
)

export default Experience