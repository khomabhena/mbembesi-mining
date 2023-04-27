import ProfileDetails from '@/components/Applicant/profile-details'
import ProfileOverview from '@/components/Applicant/profile-overview'
import ApplicantDashboard from '@/components/Dashboard/applicant-dashboard'
import { useAuthContext } from '@/context/AuthContext'
import { useStateContext } from '@/context/StateContext'
import { FirebaseStorage } from '@/firebase/fetch-data'
import React, { useState, useEffect } from 'react'

const Profile = () => {
  const { user } = useAuthContext()
  const { expanded, setActiveLink } = useStateContext()
  const [data, setData] = useState(null)

  useEffect(() => {
    setActiveLink("/applicant/profile")
    const getData = async () => {
      let { result, error } = await FirebaseStorage().getData('applicants', user.email)
      
      if (error) {
        return console.log(error)
      }

      setData(result)
    }

    getData()
  }, [])
  

  return (
    <div className='md:flex gap-4 mt-8 mx-6 pb-8 md:mx-8 transition-all flex-grow-1'>
        <div className={`bg-slate-50 rounded px-4 pt-4 pb-8 w-full ${expanded ? 'md:w-2/5' : 'md:w-2/4'}`} >
            <ProfileDetails data={data} />
        </div>
        <div className={`bg-slate-50 rounded-md mt-8 md:mt-0 px-4 pt-4 pb-8 w-full ${expanded ? 'md:w-3/5' : 'md:w-2/4'}`}>
            <ProfileOverview data={data} />
        </div>
    </div>
  )
}

Profile.getLayout = (page) => (
  <ApplicantDashboard>
      {page}
    </ApplicantDashboard>
)

export default Profile