import JobCard from '@/components/Applicant/job-card'
import UpdateApplicant from '@/components/Applicant/update'
import ApplicantDashboard from '@/components/Dashboard/applicant-dashboard'
import { useStateContext } from '@/context/StateContext'
import React, { useEffect } from 'react'

const Update = () => {
  const { setActiveLink } = useStateContext()
  useEffect(() => {
    setActiveLink('/applicant/update')
  }, [])

  return (
    <div className='flex flex-col gap-4 mx-4 md:mx-8 mt-8 pb-12'>
      <UpdateApplicant />
    </div>
  )
}

Update.getLayout = (page) => (
    <ApplicantDashboard>
      {page}
    </ApplicantDashboard>
)

export default Update