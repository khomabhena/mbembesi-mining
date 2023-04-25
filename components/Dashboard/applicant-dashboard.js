import React from 'react'
import DashboardLayout from '.'
import { applicantMenu } from '../Data'
import { StateContext } from '@/context/StateContext'
import { AuthContext } from '@/context/AuthContext'

const ApplicantDashboard = ({children}) => {
  return (
    <StateContext>
      <AuthContext>
        <DashboardLayout menu={applicantMenu} title="Applicant Menu">
            {children}
        </DashboardLayout>
      </AuthContext>
    </StateContext>
  )
}

export default ApplicantDashboard