import QualificationsApplicant from '@/components/Applicant/qualifications'
import ApplicantDashboard from '@/components/Dashboard/applicant-dashboard'
import React from 'react'

const Qualifications = () => {
  return (
    <div className='flex flex-col gap-4 mx-4 md:mx-8 mt-8 pb-12'>
      <QualificationsApplicant />
    </div>
  )
}

Qualifications.getLayout = (page) => (
  <ApplicantDashboard>
      {page}
    </ApplicantDashboard>
)

export default Qualifications