import React from 'react'
import DashboardLayout from '.'
import { employerMenu } from '../Data'
import { StateContext } from '@/context/StateContext'

const EmployerDashboard = ({children}) => {
  return (
    <StateContext>
      <DashboardLayout menu={employerMenu} title="Employer Dashboard">
        {children}
      </DashboardLayout>
    </StateContext>
  )
}

export default EmployerDashboard