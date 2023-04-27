import React from 'react'
import DashboardLayout from '.'
import { applicantMenu } from '../Data'
import { StateContext } from '@/context/StateContext'
import { AuthContext } from '@/context/AuthContext'
import { Toaster } from 'react-hot-toast'

const ApplicantDashboard = ({children}) => {
  return (
    <StateContext>
      <AuthContext>
        <Toaster />
        <DashboardLayout menu={applicantMenu} title="Applicant Menu">
            {children}
        </DashboardLayout>
      </AuthContext>
    </StateContext>
  )
}

export default ApplicantDashboard