import React from 'react'
import DashboardLayout from '.'
import { employerMenu } from '../Data'
import { StateContext } from '@/context/StateContext'
import { AuthContext } from '@/context/AuthContext'
import { Toaster } from 'react-hot-toast'

const EmployerDashboard = ({children}) => {
  return (
    <StateContext>
      <AuthContext>
        <Toaster />
        <DashboardLayout menu={employerMenu} title="Employer Dashboard">
          {children}
        </DashboardLayout>
      </AuthContext>
    </StateContext>
  )
}

export default EmployerDashboard