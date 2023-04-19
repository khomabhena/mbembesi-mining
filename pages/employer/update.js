import EmployerDashboard from '@/components/Dashboard/employer-dashboard'
import UpdateEmployer from '@/components/Employer/update'
import React from 'react'

const Update = () => {
  return (
    <div className='flex flex-col gap-4 mx-4 md:mx-8 mt-8 pb-12'>
      <UpdateEmployer />
    </div>
  )
}

Update.getLayout = (page) => (
  <EmployerDashboard>
    {page}
  </EmployerDashboard>
)

export default Update