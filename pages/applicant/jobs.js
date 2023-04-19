import JobCard from '@/components/Applicant/job-card'
import ApplicantDashboard from '@/components/Dashboard/applicant-dashboard'
import { StateContext } from '@/context/StateContext'
import React from 'react'

const Jobs = () => {
  return (
    <div className='flex flex-col gap-4 mx-8 mt-8 pb-12'>
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  )
}

Jobs.getLayout = function getLayout(page) {
  return (
      <ApplicantDashboard>
        {page}
      </ApplicantDashboard>
  )
}

export default Jobs