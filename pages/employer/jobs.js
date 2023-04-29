import EmployerDashboard from '@/components/Dashboard/employer-dashboard'
import JobCardEmployer from '@/components/Employer/job-card'
import { useStateContext } from '@/context/StateContext'
import React, { useEffect } from 'react'

const Jobs = () => {
  const { setActiveLink } = useStateContext()

  useEffect(() => {
    setActiveLink("/employer/jobs")

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


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