import React from 'react'
import DashboardLayout from '.'
import { applicantMenu } from '../Data'
import { StateContext } from '@/context/StateContext'

const ApplicantDashboard = ({children}) => {
  return (
    <StateContext>
      <DashboardLayout menu={applicantMenu} title="Applicant Menu">
          {children}
      </DashboardLayout>
    </StateContext>
  )
}

export default ApplicantDashboard