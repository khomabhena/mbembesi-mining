import QualificationsApplicant from '@/components/Applicant/qualifications'
import ApplicantDashboard from '@/components/Dashboard/applicant-dashboard'
import { useStateContext } from '@/context/StateContext'
import React, { useEffect } from 'react'

const Qualifications = () => {
  const { setActiveLink } = useStateContext()

  useEffect(() => {
    setActiveLink("/applicant/qualifications")
  }, [])

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