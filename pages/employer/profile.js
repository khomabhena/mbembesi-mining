import EmployerDashboard from '@/components/Dashboard/employer-dashboard'
import ProfileDetailsEmployer from '@/components/Employer/profile-details'
import ProfileOverviewEmployer from '@/components/Employer/profile-overview'
import { useAuthContext } from '@/context/AuthContext'
import { useStateContext } from '@/context/StateContext'
import getDataFirebase from '@/firebase/getData'
import React, { useEffect, useState } from 'react'

const Profile = () => {
  const { user } = useAuthContext()
  const { setActiveLink, expanded } = useStateContext()
  const [data, setData] = useState(null)

  useEffect(() => {
    setActiveLink("/employers/profile")
    const getData = async () => {
      let { result, error } = await getDataFirebase('employers', user.email)
      if (error) 
        return 

      setData(result)
    }

    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='md:flex gap-4 mt-8 mx-6 pb-8 md:mx-8 transition-all flex-grow-1'>
        <div className={`bg-slate-50 rounded px-4 pt-4 pb-8 w-full ${expanded ? 'md:w-2/5' : 'md:w-1/4'}`} >
            <ProfileDetailsEmployer data={data} />
        </div>
        <div className={`bg-slate-50 rounded-md mt-8 md:mt-0 px-4 pt-4 pb-8 w-full ${expanded ? 'md:w-3/5' : 'md:w-3/4'}`}>
            <ProfileOverviewEmployer data={data} />
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