import ApplicationCard from '@/components/Applicant/application-card'
import JobCard from '@/components/Applicant/job-card'
import ApplicantDashboard from '@/components/Dashboard/applicant-dashboard'
import React from 'react'

const Applications = () => {
  return (
    <div className='flex flex-col gap-4 mx-8 mt-8 pb-12'>
      <ApplicationCard />
      <ApplicationCard />
    </div>
  )
}

Applications.getLayout = (page) => (
  <ApplicantDashboard>
      {page}
    </ApplicantDashboard>
)

export default Applications