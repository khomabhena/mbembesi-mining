import ExperienceApplicant from '@/components/Applicant/experience'
import ApplicantDashboard from '@/components/Dashboard/applicant-dashboard'
import { StateContext, useStateContext } from '@/context/StateContext'
import React, { useEffect } from 'react'

const Experience = () => {
  const { setActiveLink } = useStateContext()
  useEffect(() => {
    setActiveLink("/applicant/experience")
  }, [])

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