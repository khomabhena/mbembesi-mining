import EmployerDashboard from '@/components/Dashboard/employer-dashboard'
import ProfileDetailsEmployer from '@/components/Employer/profile-details'
import ProfileOverviewEmployer from '@/components/Employer/profile-overview'
import { useStateContext } from '@/context/StateContext'
import React from 'react'

const Profile = () => {
  const { expanded } = useStateContext()

  return (
    <div className='md:flex gap-4 mt-8 mx-6 pb-8 md:mx-8 transition-all flex-grow-1'>
        <div className={`bg-slate-50 rounded px-4 pt-4 pb-8 w-full ${expanded ? 'md:w-2/5' : 'md:w-1/4'}`} >
            <ProfileDetailsEmployer />
        </div>
        <div className={`bg-slate-50 rounded-md mt-8 md:mt-0 px-4 pt-4 pb-8 w-full ${expanded ? 'md:w-3/5' : 'md:w-3/4'}`}>
            <ProfileOverviewEmployer />
        </div>
    </div>
  )
}

Profile.getLayout = (page) => (
  <EmployerDashboard>
    {page}
  </EmployerDashboard>
)

export default Profile