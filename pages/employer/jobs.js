import EmployerDashboard from '@/components/Dashboard/employer-dashboard'
import JobCardEmployer from '@/components/Employer/job-card'
import React from 'react'

const Jobs = () => {
  return (
    <div className='flex flex-col gap-4 mx-8 mt-8 pb-12'>
      <JobCardEmployer />
      <JobCardEmployer />
      <JobCardEmployer />
    </div>
  )
}

Jobs.getLayout = (page) => (
  <EmployerDashboard>
    {page}
  </EmployerDashboard>
)

export default Jobs