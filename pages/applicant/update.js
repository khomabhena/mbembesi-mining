import JobCard from '@/components/Applicant/job-card'
import UpdateApplicant from '@/components/Applicant/update'
import ApplicantDashboard from '@/components/Dashboard/applicant-dashboard'
import React from 'react'

const Update = () => {
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