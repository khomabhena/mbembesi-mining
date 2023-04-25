import React from 'react'
import DashboardLayout from '.'
import { employerMenu } from '../Data'
import { StateContext } from '@/context/StateContext'
import { AuthContext } from '@/context/AuthContext'

const EmployerDashboard = ({children}) => {
  return (
    <StateContext>
      <AuthContext>
        <DashboardLayout menu={employerMenu} title="Employer Dashboard">
          {children}
        </DashboardLayout>
      </AuthContext>
    </StateContext>
  )
}

export default EmployerDashboard