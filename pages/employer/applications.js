import EmployerDashboard from '@/components/Dashboard/employer-dashboard'
import ApplicationsCard from '@/components/Employer/applications'
import React from 'react'

const Applications = () => {
  return (
    <div className='flex flex-col gap-4 mx-4 md:mx-8 pb-12'>
      <ApplicationsCard />
    </div>
  )
}

Applications.getLayout = (page) => (
  <EmployerDashboard>
    {page}
  </EmployerDashboard>
)
export default Applications